/*
 * The MIT License
 *
 * Copyright 2017 Jonathan Chang, Chun-yien <ccy@musicapoetica.org>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package tw.digitalculture.data.query;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.json.JsonArray;
import org.jsoup.Jsoup;

import tw.digitalculture.data.interfaces.Query;
import tw.digitalculture.config.Config.DATA;
import tw.digitalculture.data.bin.IDEASQL_JSON;
import tw.digitalculture.data.model.IDEASQL_Record;
import tw.digitalculture.model.Record_Query;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public class IdeaSQL extends Query<Record_Query> {

    public String get_url(String query_text, int limit) {
        String api = (query_text.split(" ").length > 1)
                ? DATA.IDEASQL.MULTI_URL : DATA.IDEASQL.URL;
        String url = "";
        try {
            url = api + URLEncoder.encode(query_text, "UTF-8")
                    + ((limit > 0) ? "?limit=" + limit : "");
            System.out.println(URLDecoder.decode(url, "UTF-8"));
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(IdeaSQL.class.getName()).log(Level.SEVERE, null, ex);
        }
        return url;
    }

    List<Record_Query> result;

    int count;

    @Override
    public void query(String query_text, int limit, Consumer<List<Record_Query>> callback) {
        count = 0;
        result = new ArrayList<>();
        IDEASQL_JSON.fetch(get_url(query_text, limit), (JsonArray fetch_result) -> {
            for (int i = 0; i < fetch_result.size(); i++) {
                IDEASQL_Record record = new IDEASQL_Record(fetch_result.getJsonObject(i));
                IsValidImageUrl(record.uri, (Boolean isValid) -> {
                    count++;
                    record.img_link_valid = isValid;
//                    System.out.println(count + "," + isValid);
                    if (isValid) {
                        String text = record.title.contains(query_text)
                                ? record.title : record.description;
                        result.add(new Record_Query(record.uri, text));
                    }
                    if (count == fetch_result.size()) {
                        callback.accept(result);
                    }
                });
            }
        });
    }

    public void IsValidImageUrl(String url, Consumer<Boolean> callback) {
        try {
            callback.accept(Jsoup.connect(url).ignoreContentType(true)
                    .execute().statusCode() == 200);
        } catch (IOException ex) {
            callback.accept(false);
        }
    }
}
