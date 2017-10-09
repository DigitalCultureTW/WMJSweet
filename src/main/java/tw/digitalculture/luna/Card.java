package tw.digitalculture.luna;

import static def.dom.Globals.document;
import static def.dom.Globals.window;
import static def.jquery.Globals.$;
import def.dom.HTMLElement;
import def.dom.Image;
import def.fabricjs.fabric.IImage;
import def.fabricjs.fabric.IImageOptions;
import java.util.function.Consumer;
import tw.digitalculture.config.Config;
import tw.digitalculture.config.Config.LUNA;
import tw.digitalculture.config.Config.PROJECT;
import static tw.digitalculture.luna.Luna.SIDE;

public class Card {

    public String id;
    public HTMLElement front_face;
    public String back_img;
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
                .css("border", Config.LUNA.CARD.BORDER_WIDTH + "px "
                        + Config.LUNA.CARD.BORDER_STYLE
                        + " " + Config.LUNA.CARD.BORDER_COLOR[0]);
//        create_face(PROJECT.LOGO_PATH, this::set_front_face);
    }

    private void set_front_face(HTMLElement face) {
        this.front_face = face;

    }

//    private void create_face(String path, Consumer<HTMLElement> callback) {
//        IImage img = new def.fabricjs.fabric.IImage() {
//        };
//        img.crossOrigin = "anonymous";
//        img.$set("src", path);
//        img.setSrc(path, (img_loaded) -> {
//            
//        }, IImageOptions);
//
//        HTMLElement card_face = document.createElement("div");
//        $(card_face).css("width", SIDE).css("height", SIDE)
//                .css("background-color", LUNA.CARD.COLOR);
//        img.$set("onload", this::loaded);
//
//        void loaded
//        
//        
//            () {
//            int width = img.$get("width");
//            int height = img.$get("height");
//            double max = (width > height)
//                    ? width * SIDE / height
//                    : height * SIDE / width;
//            Image img_trans = LoadingImage.scale();
//
//            callback(card_face);
//
//        });
//    }

//public void flip(String back) {
//        set_front_img(back_img);
//        back_img = back;
//    }

}
