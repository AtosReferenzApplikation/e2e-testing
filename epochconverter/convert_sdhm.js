"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var SEC = /** @class */ (function () {
    function SEC(seconds) {
        this.convert_sdhm = protractor_1.element(protractor_1.by.id("tc")).element(protractor_1.by.id("scinput"));
        this.convert_sdhm_button = protractor_1.element(protractor_1.by.id("tc")).element(protractor_1.by.buttonText("Seconds to days, hours, minutes"));
        this.convert_sdhm.clear();
        this.convert_sdhm.getAttribute('value').sendKeys(seconds);
        this.convert_sdhm_button.click();
    }
    return SEC;
}());
exports.SEC = SEC;
