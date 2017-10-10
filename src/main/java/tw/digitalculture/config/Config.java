package tw.digitalculture.config;

public class Config {

    public static class PROJECT {

        public static String TITLE_MAIN = "記憶窗櫺";
        public static String TITLE_ENGLISH = "The Window of Our Memories";
        public static String SUBTITLE = "共築臺中印象的角落";

        public static String TITLE = PROJECT.TITLE_MAIN + "—" + PROJECT.SUBTITLE;
        public static String LOGO_PATH = "/element/logo_2.png";
        public static String VERSION = "0.53a-beta";
    }

    public static class UMBRA {

        public static String URL = "http://wm.localstudies.tw";
        public static String FONT = "DFKai-sb";
        public static String TITLE_COLOR = "Silver";
    }

    public static class LUNA {

        public static int COLUMN = 8, ROW = 4;
        public static String FONT = "Microsoft JhengHei";

        public static class CARD {

            public static int BORDER_WIDTH = 10;
            public static String BORDER_STYLE = "inset";
            public static String[] BORDER_COLOR = {"Silver", "White"};
            public static String COLOR = "#121212";
        }

        public static int FLIP_TIME_OUT = 5000; //ms
        public static int SYSTEM_LOGO_TIME_OUT = 7000; //ms
        public static int SHOW_INTERVAL = 2500; //ms
        public static int SHOW_STAY = 1500; //ms
        public static String QRCODE = "@QR_CODE_TOKEN";

        public static int MIN_LOGO() {
            return ((LUNA.ROW * LUNA.COLUMN) / 8);
        }

        public static double TITLE_RATIO = 0.6;
        public static String TITLE_COLOR = "Silver";
        public static double TOP_HEIGHT_RATIO = 0.08;
        public static double BOTTOM_HEIGHT_RATIO = 0.04;

        public static double MOD(int row) {
            return (row > 2) ? 1 : ((row == 1) ? 0.70 : 0.95);
        }

        public class Record_Display {

            public String query_str;
            public String img_path;
            public String content;
            public boolean used;

            public Record_Display(String str, String img, String txt) {
                query_str = str;
                img_path = img;
                content = txt;
                used = false;
            }
        }
    }
}
