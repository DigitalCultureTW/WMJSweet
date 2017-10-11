package tw.digitalculture.umbra;

import static def.dom.Globals.document;
import static def.jquery.Globals.$;
import static def.socket_io_client.Globals.io;
import static jsweet.util.Lang.function;
import def.socket_io_client.socketioclient.Socket;
import def.js.JSON;

import tw.digitalculture.config.Config.PROJECT;

/**
 *
 * @author Jonathan
 */
public final class Umbra {

    private Socket socket;

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
            }
            return null;
        }));

    }

    public void setup() {
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
