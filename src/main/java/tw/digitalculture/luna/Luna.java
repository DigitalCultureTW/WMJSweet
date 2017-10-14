package tw.digitalculture.luna;

import static def.dom.Globals.document;
import static def.dom.Globals.window;
import static def.node.Globals.setTimeout;
import static def.node.Globals.setInterval;
import static def.jquery.Globals.$;
import static def.socket_io_client.Globals.io;
import def.socket_io_client.socketioclient.Socket;
import def.dom.HTMLElement;
import def.js.JSON;
import static jsweet.util.Lang.function;

import tw.digitalculture.config.Config.LUNA;
import tw.digitalculture.config.Config.PROJECT;
import tw.digitalculture.model.Record_Display;
import tw.digitalculture.model.Record_Query;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Jonathan
 */
public final class Luna {

    Socket socket;
    public static double SIDE;
    static Map<String, Card> cards;
    static int is_logo;
    static String qr_code;

    public static void main(String[] args) {

        $(document).ready(() -> {
            Luna luna = new Luna();
            return null;
        });
    }

    public Luna() {
        System.out.println(PROJECT.TITLE_ENGLISH);
        Luna.is_logo = LUNA.COLUMN * LUNA.ROW;
        setup();
        init_cards();
        setup_socket();
        setInterval(this::trigger_data, LUNA.SHOW_INTERVAL);
    }

    static Map<String, Record_Display> data_pool = new HashMap<>();
    static int is_locked = 0;
    static List<String> deleted_keys = new ArrayList<>();

    public void trigger_data(Object arg) {
        if (data_pool.size() - deleted_keys.size() > 0
                && is_locked < LUNA.COLUMN * LUNA.ROW) {
            String key = "";
            do {
                int index = (int) ((Math.random() * data_pool.size()) - 1);
                key = (String) data_pool.keySet().toArray()[index];
//                System.out.println(key + ":" + data_pool.get(key).used);
                if (data_pool.get(key).used) {
                    data_pool.remove(key);
                    key = "";
                }
            } while (key.isEmpty());
            Record_Display rec = data_pool.get(key);
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
            deal_card();
        }
    }

    private void setup_socket() {
        socket = io("?role=luna");

        socket.on("fire", function((JSON data) -> onFire(data)));

        socket.on("result", function((JSON data) -> onResult(data)));
    }

    public void onFire(JSON data) {
        System.out.println("from " + data.$get("user"));
        deal_card();
    }

    public void onResult(JSON data) {
        def.js.Array<Record_Query> record_set = data.$get("record_set");
        int replaced = 0;
        for (int i = 0; i < record_set.length; i++) {
            Record_Display record = new Record_Display(data.$get("query_str"),
                    record_set.$get(i).img_url, record_set.$get(i).content);
//            System.out.println(record.query_str + "," + record.img_path + "," + record.content);
            if (data_pool.containsKey(record.query_str + record.img_path)) {
                replaced++;
            }
            if (i == 0) {
                deal_card(record.query_str, record.img_path, record.content);
            } else {
                data_pool.put(record.query_str + record.img_path, record);
            }
        }
        System.out.println("data_pool size = " + data_pool.size() + "(" + replaced + ")");
    }

    public void deal_card() {
        deal_card("", PROJECT.LOGO_PATH, LUNA.QRCODE);
    }

    public void deal_card(String query_str, String img_path, String content) {

        Card c = null;
        int row, col;
        do {
            row = (int) (LUNA.ROW * Math.random());
            col = (int) (LUNA.COLUMN * Math.random());
            c = cards.get(row + "_" + col);
            //System.out.println(row + "," + col + "," + cards.size() + "," + c.is_logo + "," + is_logo);
        } while (c.locked || (is_logo > LUNA.MIN_LOGO()
                && !LUNA.QRCODE.equals(content) && !c.is_logo));
        //當卡片不是logo，並且版面上的logo多於LUNA.MIN_LOGO
        final Card flip_card = c;

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
            flip_card.flip(LUNA.QRCODE, 1);
        } else {
            String text = ((!query_str.isEmpty()) ? "[" + query_str + "] " : "") + content;
            flip_card.flip(flip_card.draw_text(text), 1);
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
        cards = new HashMap<>();
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
                .css("font-size", font_size_bottom + "px");
    }

}
