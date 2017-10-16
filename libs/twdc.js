(function () {
    'use strict';
    var jsdom = require("jsdom");
    var {JSDOM} = jsdom;
    var {window} = new JSDOM('<!DOCTYPE html><html></html>');
    var $ = require('jquery')(window);
    
    var xml = require('./xml.js')();
    var {Record} = require('./xml.js')();
    var {Record_Query} = require('../config.js').DATA;
    var cf = require('../config.js').DATA;
    
    module.exports = function (limit, callback) {
        var methods = {};
        var dataset = [];
        
        methods.refresh = function (url, callback) {
            xml.fetch(url, (data) => {
                var xml_records = $(data).find("record");
                console.log("loading " + xml_records.length + " records...");
                xml_records.each(function () {
                    var record = new Record(
                            $(this).find("header"),
                            $(this).find("metadata"));
//                    console.log(record.link);
                    if (record.link && cf.FILETYPES.indexOf(record.filetype) > -1)
                        dataset.push(record);
                });
                var resumptionToken = $(data).find('resumptionToken').text();
                if (resumptionToken)
                    methods.refresh(cf.TWDC.URL_TOKEN + resumptionToken, callback);
                else {
                    console.log("Initializing twdc dataset completed. Total records fetched = "
                            + dataset.length);
                    callback();
                }
            });
        };
        
        methods.query = function (text, callback) {
            var records = [];
            var n = limit;
            for (var i = 0; i < dataset.length; i++) {
                var result = dataset[i].contains(text);
                if (result.length > 0) {
                    n--;
                    records.push(new Record_Query(
                            dataset[i].link,
                            result
                            ));
                }
//                if (n === 0)
//                    break;
            }
            callback(records);
        };
        console.log("Refreshing data from twdc...");
        methods.refresh(cf.TWDC.URL_BASE, callback);
        return methods;
    };
}());


