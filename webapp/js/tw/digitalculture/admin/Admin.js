/* Generated from Java with JSweet 2.0.1-SNAPSHOT - http://www.jsweet.org */
var tw;
(function (tw) {
    var digitalculture;
    (function (digitalculture) {
        var admin;
        (function (admin) {
            /**
             *
             * @author Jonathan
             * @class
             */
            var Admin = (function () {
                function Admin() {
                    this.number = 3;
                    if (this.keyword_elements === undefined)
                        this.keyword_elements = null;
                    if (this.ideasql_pool_size === undefined)
                        this.ideasql_pool_size = 0;
                    if (this.socket === undefined)
                        this.socket = null;
                    this.setup_socket();
                    this.setup();
                }
                Admin.main = function (args) {
                    $(document).ready(function () {
                        if (Admin.admin == null) {
                            Admin.admin = new Admin();
                        }
                        return null;
                    });
                };
                /*private*/ Admin.prototype.setup = function () {
                    var _this = this;
                    this.keyword_elements = ({});
                    for (var i = 0; i < this.number; i++) {
                        var keyword = new tw.digitalculture.admin.Keyword("keyword" + i);
                        /* put */ (this.keyword_elements[keyword._id] = keyword);
                        $("#keyword_panel").append(keyword.getHTMLElement());
                    }
                    ;
                    $("#submit").on("click", function (e, o) { return _this.handler(e, o); });
                };
                /*private*/ Admin.prototype.handler = function (e, o) {
                    var _this = this;
                    var current = ([]);
                    /* clear */ (tw.digitalculture.config.Config.PROJECT.KEYWORDS_$LI$().length = 0);
                    $("#current").text("");
                    /* keySet */ Object.keys(this.keyword_elements).forEach((function (current) {
                        return function (key) {
                            var word = (function (m, k) { return m[k] === undefined ? null : m[k]; })(_this.keyword_elements, key).word;
                            /* add */ (tw.digitalculture.config.Config.PROJECT.KEYWORDS_$LI$().push(word) > 0);
                            console.info(word + " added.");
                            /* add */ (current.push(word) > 0);
                            $("#current").text($("#current").text() + " " + word);
                        };
                    })(current));
                    return null;
                };
                /*private*/ Admin.prototype.setup_socket = function () {
                    this.socket = io("?role=admin");
                };
                return Admin;
            }());
            Admin.admin = null;
            admin.Admin = Admin;
            Admin["__class"] = "tw.digitalculture.admin.Admin";
        })(admin = digitalculture.admin || (digitalculture.admin = {}));
    })(digitalculture = tw.digitalculture || (tw.digitalculture = {}));
})(tw || (tw = {}));
tw.digitalculture.admin.Admin.main(null);
