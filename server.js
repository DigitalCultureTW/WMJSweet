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
var port = process.env.port || process.env.PORT || 1337;
//var port = process.env.port || process.env.npm_package_config_LOCAL_PORT;
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

var limit = java.callStaticMethodSync('tw.digitalculture.config.Config$DATA', 'LIMIT');
var timeout = java.getStaticFieldValue('tw.digitalculture.config.Config$LUNA', 'SYSTEM_LOGO_TIME_OUT');
//var cf = require('./config.js');
var keyword = "文化局";
var job = java.callStaticMethodSync('javax.json.Json',
        'createObjectBuilder');
var myCallback = java.newProxy('java.util.function.Consumer', {
    accept: function (dc) {
        io.on('connection', function (client) {
            console.log(client.id + "_" + client.handshake.query.role + "_connection");
            client.on('query', function (data) {
                var myCb2 = java.newProxy('java.util.function.Consumer', {
                    accept: function (result) {
                        var data_package = result;
                        var result_str = (data_package.record_set.length === 0) ?
                                '抱歉，' + data.text + ' 沒有找到任何內容。'
                                : data.text + ' 取得' + data_package.record_set.sizeSync() + '筆內容。';
                        console.log(result_str);
                        io.emit('message', {
                            user: data.client,
                            message: result_str
                        });
                        if (data_package.record_set.sizeSync() > 0) {
                            var pack = {
                                client: data_package.client,
                                query_str: data_package.query_str,
                                record_set: []
                            };
                            for (var i = 0; i < data_package.record_set.sizeSync(); i++) {
//                                console.log('index = ' + i + "/" + data_package.record_set.sizeSync());
                                var rec = data_package.record_set.getSync(i);
                                pack.record_set.push({
                                    img_url: rec.img_url,
                                    content: rec.content
                                });
                            }
                            io.emit('result', pack);
                        }
                    }
                });
                var data2 = job.addSync("client", data.client)
                        .addSync("text", data.text).buildSync();
                dc.getResultSync(data2, 20, myCb2);
            });
            client.on('disconnect', function () {
                console.log("disconnect");
            });
            client.on('keyword', function (data) {
                if (data.keyword)
                    keyword = data.keyword;
            });
            client.on('keyword_query', function () {
                io.emit('keyword_current', {keyword: keyword});
            });
        });

        setInterval(function () {
//            var json = java.import('javax.json.Json');
//            var job = json.createObjectBuilder();

            var data = job.addSync("client", "Server")
                    .addSync("text", keyword).buildSync();
            var myCb2 = java.newProxy('java.util.function.Consumer', {
                accept: function (result) {
                    var index = parseInt(result.record_set.sizeSync() * Math.random());
                    var select = result.record_set.getSync(index);
                    io.emit('fire', {
                        user: "Server",
                        keyword: keyword,
                        uri: select.img_url,
                        text: select.content});
                }});
            dc.getResultSync(data, 20, myCb2);
        }, timeout);

        console.log("Server listening to port: " + port);
        server.listen(port);
    }
});
java.newInstanceSync('tw.digitalculture.data.DataCenter', myCallback);
/*
 var dc = require('./libs/DataCenter')(limit, () => {
 //var dc = require('./libs/DataCenter')(cf.DATA.LIMIT, () => {
 io.on('connection', function (client) {
 console.log(client.id + "_" + client.handshake.query.role + "_connection");
 client.on('query', function (data) {
 dc.getResultSync(data, (result) => {
 var data_package = result;
 var result_str = (data_package.record_set.length === 0) ?
 '抱歉，' + data.text + ' 沒有找到任何內容。'
 : data.text + ' 取得' + data_package.record_set.length + '筆內容。';
 console.log(result_str);
 io.emit('message', {
 user: data.client,
 message: result_str
 });
 if (data_package.record_set.length > 0)
 io.emit('result', data_package);
 });
 });
 client.on('disconnect', function () {
 console.log("disconnect");
 });
 client.on('keyword', function (data) {
 if (data.keyword)
 keyword = data.keyword;
 });
 client.on('keyword_query', function () {
 io.emit('keyword_current', {keyword: keyword});
 });
 });
 
 setInterval(function () {
 var data = {
 client: 'Server',
 text: keyword
 };
 dc.getResultSync(data, (result) => {
 var select = result.record_set[parseInt(result.record_set.length * Math.random())];
 io.emit('fire', {
 user: "Server",
 keyword: keyword,
 uri: select.img_url,
 text: select.content});
 });
 }, timeout);
 
 console.log("Server listening to port: " + port);
 server.listen(port);
 });
 
 */

