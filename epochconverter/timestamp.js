"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var DTG = /** @class */ (function () {
    function DTG(datetimegmt) {
        this.timestamp = protractor_1.element(protractor_1.by.id("br-d1")).element(protractor_1.by.className("dateform year"));
        this.timestamp_button = protractor_1.element(protractor_1.by.id("br-d2")).element(protractor_1.by.className("dateform month"));
        this.timestamp.clear();
        this.timestamp.getAttribute('value').sendKeys(datetimegmt);
        this.timestamp_button.click();
    }
    return DTG;
}());
exports.DTG = DTG;
