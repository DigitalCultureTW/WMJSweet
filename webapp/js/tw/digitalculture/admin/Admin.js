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
                    if (this.default_keywords === undefined)
                        this.default_keywords = null;
                    if (this.ideasql_pool_size === undefined)
                        this.ideasql_pool_size = 0;
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
                    this.default_keywords = ({});
                    /* put */ (this.default_keywords["#k1"] = new tw.digitalculture.admin.Keyword("k1"));
                    /* put */ (this.default_keywords["#k2"] = new tw.digitalculture.admin.Keyword("k2"));
                    /* entrySet */ (function (o) { var s = []; for (var e in o)
                        s.push({ k: e, v: o[e], getKey: function () { return this.k; }, getValue: function () { return this.v; } }); return s; })(this.default_keywords).forEach(function (e) {
                        $("#keyword_panel").append(e.getValue().getHTMLElement());
                    });
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
