/* Generated from Java with JSweet 2.0.1-SNAPSHOT - http://www.jsweet.org */
var tw;
(function (tw) {
    var digitalculture;
    (function (digitalculture) {
        var umbra;
        (function (umbra_1) {
            /**
             *
             * @author Jonathan Chang, Chun-yien <ccy@musicapoetica.org>
             * @class
             */
            var Umbra = (function () {
                function Umbra() {
                    if (this.__socket === undefined)
                        this.__socket = null;
                    if (this.context === undefined)
                        this.context = null;
                    if (this.audioBuffer === undefined)
                        this.audioBuffer = null;
                    this.setup();
                    this.socket();
                }
                Umbra.main = function (args) {
                    $(document).ready(function () {
                        var umbra = new Umbra();
                        return null;
                    });
                };
                Umbra.prototype.socket = function () {
                    var _this = this;
                    this.__socket = io("?role=umbra");
                    $("#search").keyup(function (event) {
                        if (event.keyCode === 13) {
                            $("#query").click();
                        }
                        return null;
                    });
                    $("#search").focus(function (event) {
                        $("#message").text("");
                        return null;
                    });
                    $("#query").click(function (event) {
                        var text = $("#search").val().toString().trim();
                        if (text.length > 0) {
                            $("#query").attr("disabled", "true");
                            $("#search").attr("disabled", "true");
                            $("#message").text("\u8655\u7406\u4e2d...");
                            _this.__socket.emit("query", JSON.parse("{\"client\": \"" + _this.__socket.id + "\",\"text\": \"" + text + "\"}"));
                        }
                        if (tw.digitalculture.config.Config.UMBRA.iOS_$LI$()) {
                            var index = (Math.floor(tw.digitalculture.config.Config.UMBRA.SOUNDS_$LI$().length * Math.random()) | 0);
                            var source_1 = _this.context.createBufferSource();
                            source_1.buffer = _this.audioBuffer[index];
                            source_1.connect(_this.context.destination);
                            setTimeout(function (t) {
                                source_1.start();
                            }, 2000);
                        }
                        return null;
                    });
                    this.__socket.on("message", (function (data) {
                        if ((function (o1, o2) { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(_this.__socket.id, data["user"])) {
                            $("#query").removeAttr("disabled");
                            $("#search").removeAttr("disabled");
                            $("#message").text((data["message"]));
                            $("#search").val("");
                            if (!tw.digitalculture.config.Config.UMBRA.iOS_$LI$()) {
                                var index = (Math.floor(tw.digitalculture.config.Config.UMBRA.SOUNDS_$LI$().length * Math.random()) | 0);
                                var source = _this.context.createBufferSource();
                                source.buffer = _this.audioBuffer[index];
                                source.connect(_this.context.destination);
                                source.start();
                            }
                        }
                        return null;
                    }));
                };
                Umbra.prototype.setup = function () {
                    var _this = this;
                    this.context = (eval("new (window.AudioContext || window.webkitAudioContext)();"));
                    $("#query").attr("disabled", "true");
                    $("#search").attr("disabled", "true");
                    var bufferLoader = new tw.digitalculture.umbra.BufferLoader(this.context, tw.digitalculture.config.Config.UMBRA.SOUNDS_$LI$(), function (buffer) {
                        _this.audioBuffer = buffer;
                        console.info("Umbra setup finished.");
                        $("#query").removeAttr("disabled");
                        $("#search").removeAttr("disabled");
                    });
                    bufferLoader.load();
                    $("#logo").attr("src", tw.digitalculture.config.Config.PROJECT.LOGO_PATH);
                    $("#logo").on("load", function (arg0, arg1) {
                        _this.resizeImage();
                        return null;
                    });
                };
                Umbra.prototype.resizeImage = function () {
                    var window_height = document.body.clientHeight;
                    var window_width = document.body.clientWidth;
                    var image_width = $("#logo").width();
                    var image_height = $("#logo").height();
                    var height_ratio = image_height / window_height;
                    var width_ratio = image_width / window_width;
                    if (height_ratio > width_ratio) {
                        $("#logo").width("auto");
                        $("#logo").height("75%");
                    }
                    else {
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
                };
                return Umbra;
            }());
            umbra_1.Umbra = Umbra;
            Umbra["__class"] = "tw.digitalculture.umbra.Umbra";
        })(umbra = digitalculture.umbra || (digitalculture.umbra = {}));
    })(digitalculture = tw.digitalculture || (tw.digitalculture = {}));
})(tw || (tw = {}));
tw.digitalculture.umbra.Umbra.main(null);
