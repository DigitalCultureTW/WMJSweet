package tw.digitalculture.luna;

import static def.dom.Globals.document;
import def.dom.CanvasRenderingContext2D;
import def.dom.HTMLElement;
import def.dom.HTMLCanvasElement;
import def.dom.HTMLImageElement;
import static def.jquery.Globals.$;
import static def.node.Globals.setTimeout;

import java.util.function.Consumer;
import tw.digitalculture.config.Config.LUNA;
import tw.digitalculture.config.Config.PROJECT;
import tw.digitalculture.config.Config.UMBRA;
import static tw.digitalculture.luna.Luna.SIDE;

public final class Card {

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
        this.card = refresh_card_div();
        create_face(PROJECT.LOGO_PATH, (face) -> {
            this.front_face = face;
            $(face).addClass("face flip in front");
            $(card).append(face);
        });
    }

    public HTMLElement refresh_card_div() {

        HTMLElement c = document.createElement("div");
        $(c).addClass("card viewport-flip left");
        $(c).attr("id", this.id);
        $(c).css("width", SIDE).css("height", SIDE)
                .css("border", LUNA.CARD.BORDER_WIDTH + "px "
                        + LUNA.CARD.BORDER_STYLE + " "
                        + LUNA.CARD.BORDER_COLOR[0]);
        return c;
    }

    public static String DEG(int ori) {
        switch (ori) {
            case 3:
                return "180";
            case 6:
                return "90";
            case 8:
                return "-90";
            default:
                return "0";
        }
    }

    private void create_face(String path, Consumer<HTMLElement> callback) {
        HTMLElement card_face = document.createElement("div");
        $(card_face).css("width", SIDE).css("height", SIDE)
                .css("background-color", LUNA.CARD.COLOR);
        $(card_face).addClass("face");

        ExifReader.getOrientation(path, (Integer ori) -> {
            front_img = (HTMLImageElement) document.createElement("img");
            front_img.crossOrigin = "anonymous";
            front_img.src = (LUNA.QRCODE.equals(path)) ? UMBRA.QRCODE_IMG
                    : (path.startsWith(LUNA.TEXT))
                    ? path.substring(LUNA.TEXT.length()) : path;
            front_img.onload = (e) -> {
                $(front_img).css("width", "100%").css("height", "100%");
//            $(front_img).css("image-orientation", "from-image");
                $(front_img).css("transform", "rotate(" + DEG(ori) + "deg)");
                $(front_img).addClass("img");
                $(card_face).append(front_img);
                callback.accept(card_face);
                return null;
            };
        });

    }

    public void flip(String img, int color_index) {
        create_face(img, (back_face) -> {
            $(back_face).addClass("flip out");
            $(front_face).toggleClass("in").toggleClass("out");
            setTimeout((o1) -> {
                $(card).append(back_face);
                $(back_face).toggleClass("out").toggleClass("in");
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

    int font_size = (int) (SIDE / 10);

    public String draw_text(String text) {
        HTMLCanvasElement canvas = (HTMLCanvasElement) document.createElement("canvas");
        CanvasRenderingContext2D ctx = (CanvasRenderingContext2D) canvas.getContext("2d");
        ctx.canvas.width = SIDE;
        ctx.canvas.height = SIDE;
        ctx.fillStyle = LUNA.CARD.COLOR;
        ctx.fillRect(0, 0, SIDE, SIDE);
        ctx.font = font_size + "px " + LUNA.CARD.FONT;
        ctx.fillStyle = "white";
        double margin = font_size * 0.8;
        double y = margin + font_size;
        char[] textArray = text.toCharArray();
        String substr = "";
        for (int i = 0; i < textArray.length; i++) {
            substr += textArray[i];
            int substr_width = (int) ctx.measureText(substr).width;
            if (substr_width > SIDE - margin * 3 || i == text.length() - 1) {
                ctx.fillText(substr, margin, y);
                substr = "";
                y += font_size * 1.2;
                if (y > SIDE - margin) {
                    break;
                }
            }
        }
        return LUNA.TEXT + canvas.toDataURL("image/png");
    }
}
