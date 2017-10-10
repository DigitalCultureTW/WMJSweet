package tw.digitalculture.luna;

import static def.dom.Globals.document;
import static def.dom.Globals.window;
import static def.jquery.Globals.$;
import def.dom.HTMLElement;
import def.node.Globals;
import static def.node.Globals.setTimeout;
//import static def.qrcode_generator.Globals.qrcode_generator;
//import def.qrcode_generator.QRCode;
import static def.socket_io_client.Globals.io;
import def.socket_io_client.socketioclient.Socket;

import tw.digitalculture.config.Config.PROJECT;
import tw.digitalculture.config.Config.LUNA;
import tw.digitalculture.config.Config.UMBRA;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Jonathan
 */
public final class Luna {

    Socket socket = io("?role=luna");
    public static Map<String, Card> cards;
    public static int is_logo;
    public static double SIDE;
    static String qr_code;
//    static QRCode QR;

    public static void main(String[] args) {

        $(document).ready(() -> {
            Luna luna = new Luna();
            return null;
        });
    }

    public Luna() {
        Luna.cards = new HashMap<>();
        System.out.println(PROJECT.TITLE_ENGLISH);
        Luna.is_logo = LUNA.COLUMN * LUNA.ROW;
//        QR = qrcode_generator(2, "H");
        //Level L – up to 7% damage
        //Level M – up to 15% damage
        //Level Q – up to 25% damage
        //Level H – up to 30% damage
//        QR.addData(UMBRA.URL);
//        QR.make();
//        qr_code = QR.createImageTag(SIDE * 0.7, 5);
        setup();
        init_cards();
        Globals.setInterval(this::trigger_data, LUNA.SHOW_INTERVAL);
    }

    public static Map<String, LUNA.Record_Display> data_pool = new HashMap<>();
    public static int is_locked = 0;
    public static List<String> deleted_keys = new ArrayList<>();

    public void trigger_data(Object arg) {
        if (data_pool.size() - deleted_keys.size() > 0 && is_locked < LUNA.COLUMN * LUNA.ROW) {
            String key = null;
            do {
                key = data_pool.keySet().toArray(new String[0])[(int) (Math.random() * data_pool.size()) - 1];
                if (data_pool.get(key).used) {
                    data_pool.remove(key);
                    key = null;
                }
            } while (key == null);
            LUNA.Record_Display rec = data_pool.get(key);
            rec.used = true;
            deleted_keys.add(key);
            deal_card(rec.query_str, rec.img_path, rec.content);
        } else {
            if (deleted_keys.size() > 0) {
                deleted_keys.forEach((key) -> {
                    data_pool.remove(key);
                });
                System.out.println(deleted_keys.size() + " dumped. data_pool size = "
                        + data_pool.size());
                deleted_keys = new ArrayList<>();
            }
            deal_card("", PROJECT.LOGO_PATH, LUNA.QRCODE);
        }
    }

    Card flip_card;

    public void deal_card(String query_str, String img_path, String content) {

        int row, col;
        do {
            row = (int) (LUNA.ROW * Math.random());
            col = (int) (LUNA.COLUMN * Math.random());
            flip_card = cards.get(row + "_" + col);
//            console.log(row, col, cards.length, cards[row].length, flip_card.is_logo, is_logo);
        } while (flip_card.locked || (is_logo > LUNA.MIN_LOGO()
                && !LUNA.QRCODE.equals(content) && !flip_card.is_logo));
        //當卡片不是logo，並且版面上的logo多於LUNA.MIN_LOGO
        if (PROJECT.LOGO_PATH.equals(img_path) || LUNA.QRCODE.equals(content)) {
            if (!flip_card.is_logo) {
                is_logo++;
                flip_card.is_logo = true;
            }
        } else {
            if (flip_card.is_logo) {
                is_logo--;
                flip_card.is_logo = false;
            }
        }
        flip_card.locked = true;
        is_locked++;
        if (LUNA.QRCODE.equals(content)) {
        flip_card.flip(UMBRA.QRCODE_IMG, 1);
        }
        else {
            draw_text(SIDE, ((query_str) ? "[" + query_str + "] " : "")
                    + content,
                    LUNA.CARD.COLOR, (txt) =  > {
                flip_card.set_next(txt);
                flip(flip_card, SIDE, LUNA.CARD.COLOR, LUNA.CARD.BORDER_WIDTH,
                        LUNA.CARD.BORDER_STYLE, LUNA.CARD.BORDER_COLOR[1]);
            });
        }
        setTimeout((o1) -> {
            flip_card.flip(img_path, 0);
            setTimeout((o2) -> {
                flip_card.locked = false;
                is_locked--;
            }, (PROJECT.LOGO_PATH.equals(img_path)) ? 0 : LUNA.SHOW_STAY);
        }, LUNA.FLIP_TIME_OUT);
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
