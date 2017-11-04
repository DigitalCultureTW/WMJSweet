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
package tw.digitalculture.admin;

import static def.dom.Globals.document;
import def.dom.HTMLElement;
import static def.jquery.Globals.$;
import def.jquery.JQuery;
import def.jquery.JQueryEventObject;
import def.js.JSON;
import static def.socket_io_client.Globals.io;
import def.socket_io_client.socketioclient.Socket;
import java.util.HashMap;
import java.util.Map;
import static jsweet.util.Lang.function;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public class Admin {

    Map<String, Keyword> keyword_elements;
    int ideasql_pool_size;
    private static Admin admin;
    Socket socket;
    JQuery current;

    int number = 1;

    public static void main(String[] args) {
        $(document).ready(() -> {
            if (admin == null) {
                admin = new Admin();
            }
            return null;
        });
    }

    public Admin() {
        setupSocket();
        setup();
    }

    private void setup() {
        this.keyword_elements = new HashMap<>();
        this.current = $("#current");
        for (int i = 0; i < number; i++) {
            Keyword keyword = new Keyword("keyword" + i);
            this.keyword_elements.put(keyword._id, keyword);
            $("#keyword_panel").append(keyword.getHTMLElement());
        }
        $("#submit").on("click", this::submitHandler);
        $("#update").on("click", this::updateHandler).click();
    }

    private Object submitHandler(JQueryEventObject e, Object o) {
        this.keyword_elements.keySet().forEach((String key) -> {
            String word = keyword_elements.get(key).word;
            System.out.println(word + " added.");
            socket.emit("keyword", JSON.parse("{\"keyword\":\""
                    + word + "\"}"));
            socket.emit("keyword_query");
        });
        return null;
    }

    private Object updateHandler(JQueryEventObject e, Object o) {
        socket.emit("keyword_query");
        return null;
    }

    private void updateCurrent(String word) {
        current.children().remove();
        HTMLElement div = document.createElement("div");
        $(div).text(word);
        current.append(div);
    }

    private void setupSocket() {
        socket = io("?role=admin");
        socket.on("keyword_current", function((JSON data) -> {
            updateCurrent(data.$get("keyword").toString());
        }));
    }
}
