/*
 * Copyright (C) 2017 Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
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
        int n = (limit > 0) ? limit : -1;
        for (TWDC_Record data : dataset) {
            String result = data.contains(text);
            if (!result.isEmpty()) {
                n--;
                records.add(new Record_Query(data.uri, result));
            }
            if (n == 0) {
                break;
            }
        }
        callback.accept(records);
    }
}
