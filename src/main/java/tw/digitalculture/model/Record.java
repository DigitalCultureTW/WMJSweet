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
package tw.digitalculture.model;

import static def.jquery.Globals.$;
import static def.js.Globals.decodeURIComponent;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public class Record {

    public String identifier;
    public String title;
    public List<String> subjects = new ArrayList<>();
    public String description;
    public String link;
    public String filetype;

    public Record(Object header, Object metadata) {
        this.identifier = $(header).find("identifier").text();
        this.title = $(metadata).find("dc\\:title").text();
        $(metadata).find("dc\\:subject").each((i, s) -> {
            return subjects.add(s.toString());
        });
        this.description = $(metadata).find("dc\\:description").filter((i, o) -> {
            return (!o.toString().startsWith("http://"));
        }).text();//.replaceAll("\n", ";");
        this.link = decodeURIComponent($(metadata).find("dc\\:description").filter((i, o) -> {
            return (o.toString().startsWith("http://"));
        }).text());
        this.filetype = this.link.split(".")[this.link.split(".").length - 1];

    }

    public String contains(String keyword) {

        String result = "";
        if (this.subjects.size() > 0) {
            for (int index = 0; index < this.subjects.size(); index++) {
                if (this.subjects.get(index).contains(keyword) 
                        && this.subjects.get(index).length() > result.length()) {
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
