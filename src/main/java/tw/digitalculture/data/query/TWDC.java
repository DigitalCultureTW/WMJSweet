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

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import tw.digitalculture.config.Config.DATA;
import static tw.digitalculture.config.Config.DATA.FILETYPES;
import tw.digitalculture.data.bin.TWDC_XML;
import tw.digitalculture.data.model.TWDC_Record;
import static tw.digitalculture.config.Config.DATA.TWDC.URL_BASE;
import tw.digitalculture.data.interfaces.Query;
import tw.digitalculture.model.Record_Query;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public class TWDC extends Query<Record_Query> {

    private static List<TWDC_Record> dataset;

    public TWDC(Consumer<TWDC> callback) {
        TWDC.dataset = new ArrayList<>();
        refresh(URL_BASE, (ok) -> {
            callback.accept(ok ? this : null);
        });
    }

    public static void refresh(String url, Consumer<Boolean> callback) {

        TWDC_XML.fetch(url, (Document data) -> {
            Elements xml_records = data.getElementsByTag("record");
            System.out.println("processing " + xml_records.size() + " records...");
            for (Element rec : xml_records) {
                TWDC_Record record = new TWDC_Record(
                        rec.getElementsByTag("header"),
                        rec.getElementsByTag("metadata"));
                if (!record.uri.isEmpty() && FILETYPES.contains(record.filetype.toLowerCase())) {
                    dataset.add(record);
//                    System.out.println(dataset.size() + ". " + record.title);
                }
            }
            String resumptionToken = data.getElementsByTag("resumptionToken").text();
            if (resumptionToken.isEmpty()) {
                System.out.println(
                        "Initializing twdc dataset completed. Total record fetched = " + dataset.size());
                callback.accept(Boolean.TRUE);
            } else {
                refresh(DATA.TWDC.URL_TOKEN + resumptionToken, callback);
            }
        });
    }

    @Override
    public void query(String text, int limit, Consumer<List<Record_Query>> callback) {
        List<Record_Query> records = new ArrayList();
        for (TWDC_Record data : dataset) {
            String result = data.contains(text);
            if (!result.isEmpty()) {
                records.add(new Record_Query(data.uri, result));
            }
        }
        if (records.size() > limit && limit > 0) {
            do {
                records.remove((int) Math.floor(records.size() * Math.random()));
            } while (records.size() > limit);
        }
        callback.accept(records);
    }
}
