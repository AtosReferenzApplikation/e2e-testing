"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var YMDHMS = /** @class */ (function () {
    function YMDHMS(year, month, day, hours, minutes, seconds) {
        this.ymdhms_timestamp_year = protractor_1.element(protractor_1.by.id("hf-d1")).element(protractor_1.by.className("dateform year"));
        this.ymdhms_timestamp_month = protractor_1.element(protractor_1.by.id("hf-d2")).element(protractor_1.by.className("dateform month"));
        this.ymdhms_timestamp_day = protractor_1.element(protractor_1.by.id("hf-d3")).element(protractor_1.by.className("dateform day"));
        this.ymdhms_timestamp_hours = protractor_1.element(protractor_1.by.name("hh"));
        this.ymdhms_timestamp_minutes = protractor_1.element(protractor_1.by.name("mn"));
        this.ymdhms_timestamp_seconds = protractor_1.element(protractor_1.by.name("ss"));
        this.ymdhms_timestamp_button = protractor_1.element.all(protractor_1.by.buttonText("Human date to Timestamp")).first();
        this.ymdhms_timestamp_year.clear();
        this.ymdhms_timestamp_year.sendKeys(year);
        this.ymdhms_timestamp_month.clear();
        this.ymdhms_timestamp_month.sendKeys(month);
        this.ymdhms_timestamp_day.clear();
        this.ymdhms_timestamp_day.sendKeys(day);
        this.ymdhms_timestamp_hours.clear();
        this.ymdhms_timestamp_hours.sendKeys(hours);
        this.ymdhms_timestamp_minutes.clear();
        this.ymdhms_timestamp_minutes.sendKeys(minutes);
        this.ymdhms_timestamp_seconds.clear();
        this.ymdhms_timestamp_seconds.sendKeys(seconds);
        this.ymdhms_timestamp_button.click();
    }
    return YMDHMS;
}());
exports.YMDHMS = YMDHMS;
