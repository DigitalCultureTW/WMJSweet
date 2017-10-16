/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tw.digitalculture.admin;

import static def.dom.Globals.document;
import def.dom.HTMLInputElement;
import static def.jquery.Globals.$;

/**
 *
 * @author Jonathan
 */
class Keyword {

    String _id;
    String word;
    HTMLInputElement input;

    public Keyword() {
    }

    public Keyword(String id) {
        this._id = id;
        this.word = "";
        input = (HTMLInputElement) document.createElement("input");
        $(input).attr("id", _id);
        input.placeholder = "請輸入預設關鍵字";
    }

    public HTMLInputElement getHTMLElement() {
        return input;
    }

}
