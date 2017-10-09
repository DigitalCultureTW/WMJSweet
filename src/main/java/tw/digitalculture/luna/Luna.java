package tw.digitalculture.luna;

import static def.dom.Globals.document;
import static def.dom.Globals.window;
import static def.jquery.Globals.$;
import def.dom.HTMLElement;

import tw.digitalculture.config.Config.PROJECT;
import tw.digitalculture.config.Config.LUNA;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author Jonathan
 */
public final class Luna {

    public static Map<String, Card> cards;
    public static int is_logo;
    public static double SIDE;

    public static void main(String[] args) {

        $(document).ready(() -> {
            Luna luna = new Luna();
            return null;
        });
    }

    public Luna() {
        Luna.cards = new HashMap();
        System.out.println(PROJECT.TITLE_ENGLISH);
        Luna.is_logo = LUNA.COLUMN * LUNA.ROW;
        setup();
        init_cards();
    }

    public void init_cards() {
        for (int row = 0; row < LUNA.ROW; row++) {
            HTMLElement row_div = document.createElement("div");
            $(row_div).addClass("row");
            $("#display").append(row_div);
            for (int col = 0; col < LUNA.COLUMN; col++) {
                String id = row + "_" + col;
                Card card = new Card(id);
                cards.put(id, card);
                $(row_div).append(card.card);
            }
        }
        $(".row").css("height", SIDE + LUNA.CARD.BORDER_WIDTH * 2)
                .css("width", (SIDE + LUNA.CARD.BORDER_WIDTH * 2) * LUNA.COLUMN);
    }

    public void setup() {
        $("title").text(PROJECT.TITLE_MAIN + " | " + PROJECT.TITLE_ENGLISH);
        $(".box").css("color", LUNA.TITLE_COLOR);
        double WT = window.screen.availWidth - 10, HT = window.screen.availHeight;
        double top_height = HT * LUNA.TOP_HEIGHT_RATIO;
        double bottom_height = HT * LUNA.BOTTOM_HEIGHT_RATIO;
        SIDE = (WT / LUNA.COLUMN > (HT - top_height - bottom_height) / LUNA.ROW)
                ? (HT - top_height - bottom_height) / LUNA.ROW * LUNA.MOD(LUNA.ROW)
                - LUNA.CARD.BORDER_WIDTH * 2
                : WT * LUNA.MOD(LUNA.COLUMN) / LUNA.COLUMN - LUNA.CARD.BORDER_WIDTH * 2;
        $("#title_text").text(PROJECT.TITLE);
        $("#version_text").text("Ver. " + PROJECT.VERSION);
        int font_size_top = (int) ((PROJECT.TITLE.length() > WT / top_height)
                ? WT / top_height * LUNA.TITLE_RATIO : top_height * LUNA.TITLE_RATIO);
        int font_size_bottom = (int) (bottom_height * LUNA.TITLE_RATIO);
        $(".box").css("width", WT)
                .css("font-family", LUNA.FONT);
        $(".box.top").css("height", top_height)
                .css("font-size", font_size_top + "px");
        $(".box.bottom").css("height", bottom_height)
                .css("font-size", font_size_bottom);
    }
}
