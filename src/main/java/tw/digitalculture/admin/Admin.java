/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tw.digitalculture.admin;

import static def.dom.Globals.document;
import static def.jquery.Globals.$;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

/**
 *
 * @author Jonathan
 */
public class Admin {

    Map<String, Keyword> default_keywords;
    int ideasql_pool_size;
    private static Admin admin;

    public static void main(String[] args) {
        $(document).ready(() -> {
            if (admin == null) {
                admin = new Admin();
            }
            return null;
        });
    }

    public Admin() {
        setup();
    }

    private void setup() {
        this.default_keywords = new HashMap<>();
        default_keywords.put("#k1", new Keyword("k1"));
        default_keywords.put("#k2", new Keyword("k2"));
        default_keywords.entrySet().forEach((Entry<String, Keyword> e) -> {
            $("#keyword_panel").append(e.getValue().getHTMLElement());
        });
    }

}
