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
package tw.digitalculture.umbra;

import def.dom.AudioBuffer;
import def.dom.AudioContext;
import def.dom.Event;
import static def.dom.Globals.alert;
import def.dom.XMLHttpRequest;
import def.js.ArrayBuffer;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public class BufferLoader {

    AudioContext context;
    String[] urlList;
    Consumer<List<AudioBuffer>> onload;
    List<AudioBuffer> bufferList;
    int loadCount = 0;

    public BufferLoader(AudioContext context, String[] urlList, Consumer<List<AudioBuffer>> callback) {
        this.urlList = urlList;
        this.context = context;
        this.onload = callback;
        bufferList = new ArrayList<>();
    }

    public void load() {
        for (int i = 0; i < this.urlList.length; ++i) {
            this.loadBuffer(this.urlList[i]);
        }
    }

    public void loadBuffer(String url) {
        // Load buffer asynchronously
        XMLHttpRequest request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "arraybuffer";
        request.onload = (Event t) -> {
            context.decodeAudioData((ArrayBuffer) request.response,
                    (AudioBuffer buffer) -> {
                        if (buffer == null) {
                            alert("error decoding file data: " + url);
                            return;
                        }
                        bufferList.add(buffer);
                        if (++loadCount == urlList.length) {
                            onload.accept(bufferList);
                        }
                    },
                    () -> {
                        System.out.println("decodeAudioData error");
                    }
            );
            return null;
        };

        request.onerror = (Event t) -> {
            alert("BufferLoader: XHR error");
            return null;
        };

        request.send();
    }

}
