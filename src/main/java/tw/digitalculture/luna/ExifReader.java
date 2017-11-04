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
package tw.digitalculture.luna;

import def.dom.Blob;
import def.dom.Event;
import def.dom.FileReader;
import static def.dom.Globals.btoa;
import def.dom.XMLHttpRequest;
import def.js.ArrayBuffer;
import def.js.DataView;
import def.js.Uint8Array;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import tw.digitalculture.config.Config.LUNA;
import tw.digitalculture.config.Config.PROJECT;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public class ExifReader {

    public static void loadXHR(String url, Consumer<Blob> callback) {
        try {
            XMLHttpRequest xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.responseType = "blob";
            xhr.onerror = (e) -> {
                System.out.println("Network error.");
                callback.accept(null);
                return null;
            };
            xhr.onload = (e) -> {
                if (xhr.status == 200) {
                    callback.accept((Blob) xhr.response);
                } else {
                    System.out.println("Loading error:");// + xhr.statusText);
                    callback.accept(null);
                }
                return null;
            };
            xhr.send();
        } catch (Exception e) {
            callback.accept(null);
            System.out.println("Exception.");// + e.getMessage());
        }
    }

    public static void getOrientation(String img_path,
            BiConsumer<Integer, String> callback) {
        if (PROJECT.LOGO_PATH.equals(img_path)
                || LUNA.QRCODE.equals(img_path)
                || img_path.startsWith(LUNA.TEXT)) {
            callback.accept(0, img_path);
            return;
        }
        loadXHR(img_path, (Blob img) -> {
            if (img == null) {
                callback.accept(0, img_path);
                return;
            }
            FileReader reader = new FileReader();
            reader.readAsArrayBuffer(img);
            reader.onload = (Event e) -> {
                DataView view = new DataView(e.target.$get("result"));
                arrayBufferToString(view.buffer, (String data) -> {
                    String result = img_path.startsWith("http://")
                            ? "data:image/png;base64," + data : img_path;
                    if (view.getUint16(0, false) != 0xFFD8) {
                        callback.accept(-2, result);
                        return;
                    }
                    double length = view.byteLength, offset = 2;
                    while (offset < length) {
                        double marker = view.getUint16(offset, false);
                        offset += 2;
                        if (marker == 0xFFE1) {
                            if (view.getUint32(offset += 2, false) != 0x45786966) {
                                callback.accept(-1, result);
                                return;
                            }
                            boolean little = view.getUint16(offset += 6, false) == 0x4949;
                            offset += view.getUint32(offset + 4, little);
                            double tags = view.getUint16(offset, little);
                            offset += 2;
                            for (int i = 0; i < tags; i++) {
                                if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                                    callback.accept((int) view.getUint16(offset + (i * 12) + 8, little),
                                            result);
                                    return;
                                }
                            }
                        } else if (((int) marker & 0xFF00) != 0xFF00) {
                            break;
                        } else {
                            offset += view.getUint16(offset, false);
                        }
                    }
                    callback.accept(-1, result);
                });
                return null;
            };
        });
    }

    private static void arrayBufferToString(ArrayBuffer buffer, Consumer<String> cb) {
        cb.accept(btoa(new Uint8Array(buffer).
                reduce((String data, Double b, Double p3, Uint8Array p4) -> {
                    return data + (char) b.intValue();
                }, "")));

//        return btoa(new Uint8Array(buffer).reduce((Double p1, Double p2, Double p3, p4) -> {
//            return p1 + (char) p2.$get(p3.).intValue();
//        });
//        String binary = "";
//        Uint8Array bytes = new Uint8Array(buffer);
//        double len = bytes.byteLength;
//        for (int i = 0;
//                i < len;
//                i++) {
//            binary += (char) bytes.$get(i).intValue();
//        }
//
//        return btoa(binary);
    }

}
