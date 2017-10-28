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
package tw.digitalculture.data.model;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import tw.digitalculture.data.interfaces.Record;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public class TWDC_Record extends Record {

    public List<String> subjects = new ArrayList<>();

    public TWDC_Record(Elements header, Elements metadata) {
        super(header.select("identifier").text(),
                metadata.select("dc|title").text(),
                metadata.select("dc|description").stream().map((Element t)
                        -> t.text().startsWith("http://") ? "" : t.text())
                        .collect(Collectors.joining()),
                metadata.select("dc|description").stream().map((Element t)
                        -> t.text().startsWith("http://") ? t.text() : "")
                        .collect(Collectors.joining()));
    }

    public String contains(String keyword) {

        String result = "";

        if (this.subjects.size() > 0) {
            for (int index = 0; index < this.subjects.size(); index++) {
                if (this.subjects.get(index).contains(keyword)) {
                    result = this.subjects.get(index);
                }
            }
            if (!result.isEmpty()) {
                result += ':' + this.title + '。' + this.description;
            }
        }
        if (this.title.contains(keyword)) {
            result = this.title + '。' + this.description;
        } else if (this.description.contains(keyword)) {
            result = this.description;
        }
        return result;
    }
}
