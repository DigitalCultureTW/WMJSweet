/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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
import tw.digitalculture.config.Config;
import tw.digitalculture.config.Config.PROJECT;

/**
 *
 * @author Jonathan
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
