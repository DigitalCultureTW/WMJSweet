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
import static def.dom.Globals.alert;
import static def.dom.Globals.document;
import def.dom.HTMLAudioElement;
import static def.jquery.Globals.$;
import static def.socket_io_client.Globals.io;
import static jsweet.util.Lang.function;
import def.socket_io_client.socketioclient.Socket;
import def.js.JSON;
import java.util.List;
import tw.digitalculture.config.Config;

import tw.digitalculture.config.Config.PROJECT;

/**
 *
 * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
 */
public final class Umbra {

    private Socket socket;
    AudioContext context;
    List<AudioBuffer> audioBuffer;

    public static void main(String[] args) {
        $(document).ready(() -> {
            Umbra umbra = new Umbra();
            return null;
        });
    }

    public Umbra() {
        setup();
        socket();
    }

    public void socket() {
        socket = io("?role=umbra");

        $("#search").keyup((event) -> {
            if (event.keyCode == 13) {
                $("#query").click();
            }
            return null;
        });

        $("#search").focus((event) -> {
            $("#message").text("");
            return null;
        });

        $("#query").click((event) -> {
            String text = $("#search").val().toString().trim();
            if (text.length() > 0) {
                $("#query").attr("disabled", "true");
                $("#search").attr("disabled", "true");
                $("#message").text("處理中...");
                socket.emit("query", JSON.parse(
                        "{\"client\": \"" + socket.id + "\","
                        + "\"text\": \"" + text + "\"}"));
            }
            return null;
        });

        socket.on("message", function((JSON data) -> {
            if (socket.id.equals(data.$get("user"))) {
                $("#query").removeAttr("disabled");
                $("#search").removeAttr("disabled");
                $("#message").text((String) data.$get("message"));
                $("#search").val("");
                int index = (int) Math.floor(Config.UMBRA.SOUNDS.length * Math.random());
                playSound(index);
            }
            return null;
        }));
    }

    public void playSound(int index) {
        alert("iOS = " + Config.UMBRA.iOS + ", Playing sound no." + index);
        if (Config.UMBRA.iOS) {
            HTMLAudioElement soundHandle = (HTMLAudioElement) document.getElementById("soundHandle");
            soundHandle.src = ((HTMLAudioElement) document.getElementById("audio_" + index)).src;
            soundHandle.play();
            soundHandle.pause();
        } else {
            ((HTMLAudioElement) document.getElementById("audio_" + index)).play();
        }
    }

    public void setup() {
        context = def.js.Globals.eval("new (window.AudioContext || window.webkitAudioContext)();");

        for (int i = 0; i < Config.UMBRA.SOUNDS.length; i++) {
            HTMLAudioElement audio = (HTMLAudioElement) document.createElement("audio");
            audio.src = Config.UMBRA.SOUNDS[i];
            audio.id = "audio_" + i;
            $("head").append(audio);
        }
        HTMLAudioElement audio = (HTMLAudioElement) document.createElement("audio");
        audio.id = "soundHandle";
        $(audio).css("display", "none");

        $("#logo").attr("src", PROJECT.LOGO_PATH);
        $("#logo").on("load", (arg0, arg1) -> {
            resizeImage();
            return null;
        });
    }

    public void resizeImage() {
        double window_height = document.body.clientHeight;
        double window_width = document.body.clientWidth;
        double image_width = $("#logo").width();
        double image_height = $("#logo").height();
        double height_ratio = image_height / window_height;
        double width_ratio = image_width / window_width;

        if (height_ratio > width_ratio) {
            $("#logo").width("auto");
            $("#logo").height("75%");
        } else {
            $("#logo").width("75%");
            $("#logo").height("auto");
        }

        if (document.body.clientWidth > 300) {
            $("#logo").width(300);
            $("#logo").height(300);
        }
        $(".box").css("width", $("#logo").width() * 1.1);
        $(".container-1").css("width", $("#logo").width() * 1.1);
        $("#search").css("width", $("#logo").width() * 1.1);
    }

}
