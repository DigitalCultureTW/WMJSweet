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

    public static int num_locked;
    public static int num_logo;
    public String id;
    private HTMLElement front_face;
//    private HTMLImageElement front_img;
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
                .css("border", SIDE * LUNA.CARD.BORDER_RATIO + "px "
                        + LUNA.CARD.BORDER_STYLE + " "
                        + LUNA.CARD.BORDER_COLOR[0]);
        return c;
    }

    public static int DEG(int ori) {
        switch (ori) {
            case 3:
                return 180;
            case 6:
                return 90;
            case 8:
                return -90;
            default:
                return 0;
        }
    }

    private void create_face(String path, Consumer<HTMLElement> callback) {
        HTMLElement card_face = document.createElement("div");
        $(card_face).css("width", SIDE).css("height", SIDE)
                .css("background-color", LUNA.CARD.COLOR);
        $(card_face).addClass("face");

        ExifReader.getOrientation(path, (Integer orientation, String img_source) -> {
//            if (!img_source.startsWith(LUNA.TEXT)) {
//                System.out.println(ori + ":" + img_source);
//            }
            HTMLImageElement front_img = (HTMLImageElement) document.createElement("img");
            int rotation = DEG(orientation);
            if (rotation != 0) {
                $(front_img).css("transform", "rotate(" + rotation + "deg)");
            }
            front_img.crossOrigin = "anonymous";
            $(front_img).addClass("img");
            $(card_face).append(front_img);
            front_img.src = (LUNA.QRCODE.equals(path)) ? UMBRA.QRCODE_IMG
                    : (path.startsWith(LUNA.TEXT))
                    ? path.substring(LUNA.TEXT.length()) : img_source;// path;
            front_img.onload = (e) -> {
                callback.accept(card_face);
                return null;
            };
        });

    }

    public void flip(String img, int color_index) {
        create_face(img, (back_face) -> {
            $(back_face).addClass("flip");
            $(front_face).toggleClass("in out");
            setTimeout((o1) -> {
                $(back_face).addClass("in");
                $(card).append(back_face);
                $(card).find(".front").remove();
                $(back_face).addClass("front");
                front_face = back_face;
                setTimeout((o2) -> {
                    $(card).css("border", SIDE * LUNA.CARD.BORDER_RATIO + "px "
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
        ctx.font = LUNA.CARD.FONT_WEIGHT + " "
                + font_size + "px " + LUNA.CARD.FONT;
        ctx.fillStyle = LUNA.CARD.FONT_COLOR;
        double margin = font_size * 0.8;
        double y = margin + font_size;
        char[] textArray = def.js.Globals.eval("Array.from(text);");
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
