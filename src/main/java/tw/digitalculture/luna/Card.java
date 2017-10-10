package tw.digitalculture.luna;

import def.dom.CanvasRenderingContext2D;
import def.dom.HTMLElement;
import static def.dom.Globals.document;
import def.dom.HTMLCanvasElement;
import def.dom.HTMLImageElement;
import static def.jquery.Globals.$;
import static def.node.Globals.setTimeout;
import java.util.List;

import java.util.function.Consumer;
import java.util.function.Function;
import tw.digitalculture.config.Config.LUNA;
import tw.digitalculture.config.Config.PROJECT;
import static tw.digitalculture.luna.Luna.SIDE;

public class Card {

    public String id;
    private HTMLElement front_face;
    private HTMLImageElement front_img;
    public Boolean locked;
    public Boolean is_logo;
    public HTMLElement card;

    public Card(String id) {
        this.id = id;
        this.locked = false;
        this.is_logo = true;
        card = document.createElement("div");
        $(card).addClass("card viewport-flip left");
        $(card).attr("id", this.id);
        $(card).css("width", SIDE).css("height", SIDE)
                .css("border", LUNA.CARD.BORDER_WIDTH + "px "
                        + LUNA.CARD.BORDER_STYLE
                        + " " + LUNA.CARD.BORDER_COLOR[0]);
        create_face(PROJECT.LOGO_PATH, (face) -> {
            this.front_face = face;
            $(face).addClass("face flip in front");
            $(card).append(face);
        });
    }

    private void create_face(String path, Consumer<HTMLElement> callback) {
        HTMLElement card_face = document.createElement("div");
        $(card_face).css("width", SIDE).css("height", SIDE)
                .css("background-color", LUNA.CARD.COLOR);
        front_img = (HTMLImageElement) document.createElement("img");
        front_img.crossOrigin = "anonymous";
        front_img.src = path;
        front_img.onload = (e) -> {
            $(front_img).css("width", "100%").css("height", "100%");
            $(card_face).append(front_img);
            callback.accept(card_face);
            return null;
        };
    }

    public void flip(String img, int color_index) {
        create_face(img, (back_face) -> {
            $(back_face).addClass("face flip out");
            $(front_face).toggleClass("out").toggleClass("in");
            setTimeout((o1) -> {
                $(card).append(back_face);
                $(back_face).toggleClass("in").toggleClass("out");
                $(card).find(".front").remove();
                $(back_face).toggleClass("front");
                front_face = back_face;
                setTimeout((o2) -> {
                    $(card).css("border", LUNA.CARD.BORDER_WIDTH + "px "
                            + LUNA.CARD.BORDER_STYLE + " "
                            + LUNA.CARD.BORDER_COLOR[color_index]);
                }, 175);
            }, 225);
        });
    }

    public void draw_text(String text, Consumer<String> callback) {
        HTMLCanvasElement canvas = (HTMLCanvasElement) document.createElement("canvas");
        CanvasRenderingContext2D ctx = (CanvasRenderingContext2D) canvas.getContext("2d");
        ctx.canvas.width = SIDE;
        ctx.canvas.height = SIDE;
        ctx.fillStyle = LUNA.CARD.COLOR;
        ctx.fillRect(0, 0, SIDE, SIDE);
        int font_size = (int) (SIDE / 10);
        ctx.font = font_size + "px 標楷體";
        ctx.fillStyle = "white";
        double margin = font_size * 0.8;
        double y = margin + font_size;
        char[] textArray = text.toCharArray();
        String substr = "";
        int substr_width = 0;
        for (int i = 0; i < textArray.length; i++) {
            substr += textArray[i];
            substr_width = ctx.measureText(substr).width;
            if (substr_width > SIDE - margin * 3 || i == text.length() - 1) {
                ctx.fillText(substr, margin, y);
                substr = "";
                y += font_size * 1.2;
                if (y > SIDE - margin) {
                    break;
                }
            }
        }
        Image img = new Image();
        img.src = canvas.toDataURL("image/png");
        img.onload = function() {
            callback(img.src);
        };
    }
}
