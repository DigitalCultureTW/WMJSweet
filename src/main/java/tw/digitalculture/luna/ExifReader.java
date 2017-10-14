package tw.digitalculture.luna;

import def.dom.Blob;
import def.dom.Event;
import def.dom.FileReader;
import def.dom.XMLHttpRequest;
import def.js.DataView;
import java.util.function.Consumer;
import tw.digitalculture.config.Config.LUNA;
import tw.digitalculture.config.Config.PROJECT;

/**
 *
 * @author Jonathan
 */
public class ExifReader {

    public static void loadXHR(String url, Consumer<Blob> callback) {
        try {
            XMLHttpRequest xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.responseType = "blob";
            xhr.onerror = (e) -> {
                System.out.println("Network error.");
                callback.accept(null);
                return null;
            };
            xhr.onload = (e) -> {
                if (xhr.status == 200) {
                    callback.accept((Blob) xhr.response);
                } else {
                    System.out.println("Loading error:");// + xhr.statusText);
                    callback.accept(null);
                }
                return null;
            };
            xhr.send();
        } catch (Exception e) {
            callback.accept(null);
            System.out.println("Exception.");// + e.getMessage());
        }
    }

    public static void getOrientation(String img_path, Consumer<Integer> callback) {
        if (PROJECT.LOGO_PATH.equals(img_path)
                || LUNA.QRCODE.equals(img_path)
                || img_path.startsWith(LUNA.TEXT)) {
            callback.accept(0);
            return;
        }
        loadXHR(img_path, (Blob img) -> {
            if (img == null) {
                callback.accept(0);
                return;
            }
            FileReader reader = new FileReader();
            reader.readAsArrayBuffer(img);
            reader.onload = (Event e) -> {
                DataView view = new DataView(e.target.$get("result"));
                if (view.getUint16(0, false) != 0xFFD8) {
                    callback.accept(-2);
                    return null;
                }
                double length = view.byteLength, offset = 2;
                while (offset < length) {
                    double marker = view.getUint16(offset, false);
                    offset += 2;
                    if (marker == 0xFFE1) {
                        if (view.getUint32(offset += 2, false) != 0x45786966) {
                            callback.accept(-1);
                            return null;
                        }
                        boolean little = view.getUint16(offset += 6, false) == 0x4949;
                        offset += view.getUint32(offset + 4, little);
                        double tags = view.getUint16(offset, little);
                        offset += 2;
                        for (int i = 0; i < tags; i++) {
                            if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                                callback.accept((int) view.getUint16(offset + (i * 12) + 8, little));
                                return null;
                            }
                        }
                    } else if (((int) marker & 0xFF00) != 0xFF00) {
                        break;
                    } else {
                        offset += view.getUint16(offset, false);
                    }
                }
                callback.accept(-1);
                return null;
            };
        });
    }
}
