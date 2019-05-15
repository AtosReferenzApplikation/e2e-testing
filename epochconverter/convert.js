"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var YM = /** @class */ (function () {
    function YM(year, month) {
        this.convert_year = protractor_1.element(protractor_1.by.id("br-d1")).element(protractor_1.by.className("dateform year"));
        this.convert_month = protractor_1.element(protractor_1.by.id("br-d2")).element(protractor_1.by.className("dateform month"));
        this.convert_button = protractor_1.element(protractor_1.by.buttonText("Convert"));
        this.convert_year.clear();
        this.convert_year.sendKeys(year);
        this.convert_month.clear();
        this.convert_month.sendKeys(month);
        this.convert_button.click();
    }
    return YM;
}());
exports.YM = YM;
