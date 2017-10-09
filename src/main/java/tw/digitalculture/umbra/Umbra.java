package tw.digitalculture.umbra;

import static def.dom.Globals.document;
import static def.jquery.Globals.$;
import def.js.JSON;

import def.socket_io.socketio.*;

import tw.digitalculture.config.Config.PROJECT;
import tw.digitalculture.config.Config.UMBRA;

/**
 *
 * @author Jonathan
 */
public final class Umbra {

    private Socket socket;

    public Umbra() {
        setup();
        socket();
        $("#logo").on("load", (arg0, arg1) -> {
            resizeImage();
            return null;
        });
    }

    public void socket() {
//        Socket socket = Socket.Conn();
//        JSON.parse("{role:'umbra'}")
//        );

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
//                socket.emit("query", JSON.parse("{client: socket.id, text: text}"
            }
            return null;
        });
        //    socket.on('message', function (data) {
        //        if (data.user === socket.id) {
        //            $('#query').attr('disabled', false);
        //            $("#search").attr('disabled', false);
        //            $('#message').text(data.message);
        //            $("#search").val(null);
        //        }
        //    });
    }

    public void setup() {
        $("title").text(PROJECT.TITLE_MAIN + " | " + PROJECT.TITLE_ENGLISH);
        $("h1").text(PROJECT.TITLE_MAIN);
        $("h2").text(PROJECT.SUBTITLE);
        $("h3").text("Ver." + PROJECT.VERSION);

        String color = "\"color\":" + "\"" + UMBRA.TITLE_COLOR + "\"";
        String font = "\"font-family\":" + "\"" + UMBRA.FONT + "\"";

        $("h1").css(JSON.parse("{" + color + "," + font + "}"));
        $("h2").css(JSON.parse("{" + color + "," + font + "}"));
        $("h3").css(JSON.parse("{" + color + "}"));
        $(".myButton").css(JSON.parse("{" + font + "}"));
        $("#logo").attr("src", PROJECT.LOGO_PATH);
    }

    public static void main(String[] args) {
        $(document).ready(() -> {
            Umbra umbra = new Umbra();
            umbra.setup();
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
