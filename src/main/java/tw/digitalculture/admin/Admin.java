/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tw.digitalculture.admin;

import static def.dom.Globals.document;
import static def.jquery.Globals.$;
import def.jquery.JQueryEventObject;
import static def.socket_io_client.Globals.io;
import def.socket_io_client.socketioclient.Socket;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    int number = 3;

    public static void main(String[] args) {
        $(document).ready(() -> {
            if (admin == null) {
                admin = new Admin();
            }
            return null;
        });
    }

    public Admin() {
        setup_socket();
        setup();
    }

    private void setup() {
        this.keyword_elements = new HashMap<>();
        for (int i = 0; i < number; i++) {
            String word = (PROJECT.KEYWORDS.size() >= number)
                    ? PROJECT.KEYWORDS.get(i) : "";
            //TODO: update both page and elements
            Keyword keyword = new Keyword("keyword" + i);
            this.keyword_elements.put(keyword._id, keyword);
            $("#keyword_panel").append(keyword.getHTMLElement());
        }
        $("#submit").on("click", this::handler);
    }

    private Object handler(JQueryEventObject e, Object o) {
        List<String> current = new ArrayList<>();
        Config.PROJECT.KEYWORDS.clear();
        $("#current").text("");
        this.keyword_elements.keySet().forEach((String key) -> {
            String word = keyword_elements.get(key).word;
            Config.PROJECT.KEYWORDS.add(word);
            System.out.println(word + " added.");
            current.add(word);
            $("#current").text($("#current").text() + " " + word);
        });
        return null;
    }

    private void setup_socket() {
        socket = io("?role=admin");
    }
}
