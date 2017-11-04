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
import def.dom.HTMLInputElement;
import static def.jquery.Globals.$;
import def.jquery.JQueryEventObject;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
class Keyword {

    String _id;
    String word;
    HTMLInputElement input;

    public Keyword(String id) {
        this(id, "");
    }

    public Keyword(String id, String word) {
        this._id = id;
        this.word = word;
        input = (HTMLInputElement) document.createElement("input");
        $(input).attr("id", _id).val(word);
        input.placeholder = "請輸入預設關鍵字";
        $(input).on("change", this::handler);
    }

    private Object handler(JQueryEventObject e, Object o) {
        word = input.value;
        return null;
    }

    public HTMLInputElement getHTMLElement() {
        return input;
    }

}
