/*
 * Copyright (C) 2017 Jonathan
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
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
 * @author Jonathan
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
                    record.img_link_valid = isValid;
                    String text = record.title.contains(query_text)
                            ? record.title : record.description;
                    result.add(new Record_Query(record.uri, text));
                    count++;
                    if (count == fetch_result.size()) {
                        callback.accept(result);
                    }
                });
            }
        });
    }

    public void IsValidImageUrl(String url, Consumer<Boolean> callback) {
        try {
            if (Jsoup.connect(url).execute().statusCode() == 200) {
                callback.accept(true);
            } else {
                callback.accept(false);
            }
        } catch (IOException ex) {
            callback.accept(false);
        }
    }
}
