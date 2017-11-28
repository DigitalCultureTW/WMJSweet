/*
 * The MIT License
 *
 * Copyright 2017 Jonathan Chang, Chun-yien <ccy@musicapoetica.org>.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/* global __dirname */
'use strict';
var express = require('express');
var app = express();
app.use(express.static('webapp/lunaroot'));
app.use(express.static('webapp/umbraroot'));
app.use(express.static('webapp/admin'));
app.use(express.static('webapp/js/tw/digitalculture'));
app.use(express.static('node_modules'));
app.get('/:page?', function (req, res) {
    var path = require("path");
    switch (req.params.page) {
        case 'favicon.ico':
            res.sendFile(path.join(__dirname + '/favicon.ico'));
            break;
        case 'luna':
            res.sendFile(path.join(__dirname + '/webapp/lunaroot/luna.html'));
            break;
        case 'admin':
            res.sendFile(path.join(__dirname + '/webapp/admin/admin.html'));
            break;
        case undefined:
            res.sendFile(path.join(__dirname + '/webapp/umbraroot/umbra.html'));
            break;
        default:
//            res.sendFile(path.join(__dirname + '/webapp/' + req.params.page));
    }
});
var server = require('http').createServer(app);
//var port = process.env.port || process.env.PORT || 1337;
var port = process.env.port || process.env.npm_package_config_LOCAL_PORT;
var io = require('socket.io')(server);
var java = require('java');
java.options.push("-Dfile.encoding=UTF-8");
var fs = require('fs');
var baseDir = "./target/classes/lib";
var dependencies = fs.readdirSync(baseDir);
dependencies.forEach(function (dependency) {
    java.classpath.push(baseDir + "/" + dependency);
});
java.classpath.push('target/classes');

var title = java.getStaticFieldValue('tw.digitalculture.config.Config$PROJECT', 'TITLE_ENGLISH');
var version = java.getStaticFieldValue('tw.digitalculture.config.Config$PROJECT', 'VERSION');
console.log(title + ' [' + version + ']');
var limit = java.callStaticMethodSync('tw.digitalculture.config.Config$DATA', 'LIMIT');
var timeout = java.getStaticFieldValue('tw.digitalculture.config.Config$LUNA', 'SYSTEM_LOGO_TIME_OUT');
//var cf = require('./config.js');
var keyword = "文化局";

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var mil_sec = date.getMilliseconds();
    mil_sec = (mil_sec < 100 ? "0" : "") + (mil_sec < 10 ? "0" : "") + mil_sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "/" + month + "/" + day + " " + hour + ":" + min + ":" + sec + "." + mil_sec;

}

java.newInstanceSync('tw.digitalculture.data.DataCenter', java.newProxy('java.util.function.Consumer', {
    accept: function (dc) {
        var keyword_uri_pool;
        update_keyword(keyword);

        function update_keyword(new_keyword) {
            var data = java.callStaticMethodSync('javax.json.Json', 'createObjectBuilder')
                    .addSync("client", "Server")
                    .addSync("text", new_keyword).buildSync();
            dc.getResultSync(data, 0, "TWDC", java.newProxy('java.util.function.Consumer', {
                accept: function (result) {
                    if (result.record_set.sizeSync() > 0) {
                        keyword_uri_pool = result;
                        keyword = new_keyword;
                    } else
                        console.log('** Keyword unchanged due to empty query result.');
                }
            }));
        }

        io.on('connection', function (client) {
            var role = client.handshake.query.role;
            console.log(getDateTime() + " " + client.id + "_" + role + "_connection");
            client.on('query', function (data) {
                var data_query = java.callStaticMethodSync('javax.json.Json', 'createObjectBuilder')
                        .addSync("client", data.client)
                        .addSync("text", data.text).buildSync();
                dc.getResultSync(data_query, limit, java.newProxy('java.util.function.Consumer', {
                    accept: function (result) {
                        var result_str = (result.record_set.sizeSync() === 0) ?
                                '抱歉，' + data.text + ' 沒有找到任何內容。'
                                : data.text + ' 取得' + result.record_set.sizeSync() + '筆內容。';
                        console.log(result_str);
                        io.emit('message', {
                            user: data.client,
                            message: result_str
                        });
                        if (result.record_set.sizeSync() > 0) {
                            var pack = {
                                client: result.client,
                                query_str: result.query_str,
                                record_set: []
                            };
                            for (var i = 0; i < result.record_set.sizeSync(); i++) {
//                                console.log('index = ' + i + "/" + result.record_set.sizeSync());
                                var rec = result.record_set.getSync(i);
                                pack.record_set.push({
                                    img_url: rec.img_url,
                                    content: rec.content
                                });
                            }
                            io.emit('result', pack);
                        }
                    }
                }));
            });
            client.on('disconnect', function () {
                console.log(getDateTime() + " " + client.id + " disconnect");
            });
            client.on('keyword', function (data) {
                if (data.keyword) {
                    update_keyword(data.keyword);
                }
            });
            client.on('keyword_query', function () {
                io.emit('keyword_current', {keyword: keyword});
            });
        });

        setInterval(function () {
            var index = Math.floor(keyword_uri_pool.record_set.sizeSync() * Math.random());
            var select = keyword_uri_pool.record_set.getSync(index);
            io.emit('fire', {
                user: "Server",
                keyword: keyword,
                uri: select.img_url,
                text: select.content});
        }, timeout);

        console.log("Server listening to port: " + port);
        server.listen(port);
    }
}));




