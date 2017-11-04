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
package tw.digitalculture.data.bin;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.function.Consumer;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.json.Json;
import javax.json.JsonArray;
import org.jsoup.Jsoup;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public class IDEASQL_JSON {

    public static void fetch(String url, Consumer<JsonArray> callback) {
        try {
            byte[] data = Jsoup.connect(url).ignoreContentType(true).execute().bodyAsBytes();
            JsonArray result = Json.createReader(new ByteArrayInputStream(data)).readArray();
            callback.accept(result);
        } catch (IOException ex) {
            Logger.getLogger(IDEASQL_JSON.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
