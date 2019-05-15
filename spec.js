"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var protractor_1 = require("protractor");
<<<<<<< HEAD:spec.js
var convert_1 = require("./epochconverter/convert");
var convert_sdhm_1 = require("./epochconverter/convert_sdhm");
var timestamp_1 = require("./epochconverter/timestamp");
var ymdhms_timestamp_1 = require("./epochconverter/ymdhms_timestamp");
var moment = require("moment");
=======
var ConvertYM = require('./spec_convert.ts');
var ConvertSEC = require('./spec_convert_sdhm.ts');
var DateTimeGMT = require('./spec_timestamp.ts');
var DateTimeTest = require('./spec_ymdhms_timestamp.ts');
var moment = require('moment');
>>>>>>> parent of 82fb02d... Testfall mit epocheconverter V1.6 - JavaScript-Datei in Typescript-Datei umgewandelt:angular/spec.js
describe('Epochconverter with protractor -', function () {
    // ########## Mein ToDo ##########
    // GMT zu Local time wechseln
    // Timestamp to Human date fehlt noch
    // Jeweils Rückkgabe nach Buttonklick auslesen
    // ###############################
    // Date and time
    var year = moment().format('Y');
    var month = moment().format('M');
    var day = moment().format('D');
    var hours_utc = moment().utc().format('H');
    var hours = moment().format('H');
    var minutes = moment().format('m');
    var seconds = moment().format('s');
    // letiables for test 
    var ymdhms_timestamp_year = protractor_1.element(protractor_1.by.id("hf-d1")).element(protractor_1.by.className("dateform year"));
    var ymdhms_timestamp_month = protractor_1.element(protractor_1.by.id("hf-d2")).element(protractor_1.by.className("dateform month"));
    var ymdhms_timestamp_day = protractor_1.element(protractor_1.by.id("hf-d3")).element(protractor_1.by.className("dateform day"));
    var ymdhms_timestamp_hours = protractor_1.element(protractor_1.by.name("hh"));
    var ymdhms_timestamp_minutes = protractor_1.element(protractor_1.by.name("mn"));
    var ymdhms_timestamp_seconds = protractor_1.element(protractor_1.by.name("ss"));
    var timestamp = protractor_1.element(protractor_1.by.id("fs")).element(protractor_1.by.id("rcinput"));
    var convert_year = protractor_1.element(protractor_1.by.id("br-d1")).element(protractor_1.by.className("dateform year"));
    var convert_month = protractor_1.element(protractor_1.by.id("br-d2")).element(protractor_1.by.className("dateform month"));
    var convert_sdhm = protractor_1.element(protractor_1.by.id("tc")).element(protractor_1.by.id("scinput"));
    // Test case Convert epoch to human readable date and vice versa
    beforeEach(function () {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get('https://www.epochconverter.com/');
    });
    // DONE!
    it('TC 1.1. Check date & time', function () {
        expect(ymdhms_timestamp_year.getAttribute('value')).toEqual("" + (year));
        expect(ymdhms_timestamp_month.getAttribute('value')).toEqual("" + (month));
        expect(ymdhms_timestamp_day.getAttribute('value')).toEqual("" + (day));
        expect(ymdhms_timestamp_hours.getAttribute('value')).toEqual("" + (hours_utc));
        expect(ymdhms_timestamp_minutes.getAttribute('value')).toEqual("" + minutes);
    });
    // TODO Ausgabe muss noch ausgelesen werden
    it('TC 1.2. Manipulate date & time and check', function () {
        return __awaiter(this, void 0, void 0, function () {
            var DateTimeTest;
            return __generator(this, function (_a) {
                DateTimeTest = new ymdhms_timestamp_1.YMDHMS('1234', '11', '22', '22', '11', '34');
                return [2 /*return*/];
            });
        });
    });
    // TODO Ausgabe muss noch ausgelesen werden
    it('TC 2.1 manipulate date & time and check', function () {
        return __awaiter(this, void 0, void 0, function () {
            var DateTimeGMT;
            return __generator(this, function (_a) {
                expect(timestamp.getAttribute('value')).toEqual('Wed, 08 May 2019 15:16:02 GMT'); // It will be always wrong, just ignore this error.
                DateTimeGMT = new timestamp_1.DTG('Wed, 01 May 2019 15:16:02 GMT');
                return [2 /*return*/];
            });
        });
    });
    // Epoch dates for the start and end of the year/month/day
    // TODO Ausgabe muss noch ausgelesen werden
    it('TC 3.1. manipulate date & time and check', function () {
        return __awaiter(this, void 0, void 0, function () {
            var ConvertYM;
            return __generator(this, function (_a) {
                expect(convert_year.getAttribute('value')).toEqual("" + (year));
                expect(convert_month.getAttribute('value')).toEqual("" + (month));
                ConvertYM = new convert_1.YM('2000', '12');
                return [2 /*return*/];
            });
        });
    });
    // Convert seconds to days, hours and minutes
    // TODO Buttonklick funktioniert nicht & Ausgabe auslesen
    it('TC 4.1. manipulate seconds and check', function () {
        return __awaiter(this, void 0, void 0, function () {
            var ConvertSEC;
            return __generator(this, function (_a) {
                expect(convert_sdhm.getAttribute('value')).toEqual('90061');
                ConvertSEC = new convert_sdhm_1.SEC('20000');
                return [2 /*return*/];
            });
        });
    });
});
