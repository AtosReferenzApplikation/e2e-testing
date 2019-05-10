var moment = require('moment');
var ConvertYM = require('./convert.js');
var ConvertSEC = require('./convert_sdhm.js');
var DateTimeGMT = require('./timestamp.js');
var DateTimeTest = require('./ymdhms_timestamp.js');

describe('Epochconverter with protractor -', function() {

	// ########## Mein ToDo ##########
	// GMT zu Local time wechseln
	// Timestamp to Human date fehlt noch
	// Jeweils Rückkgabe nach Buttonklick auslesen
	// ###############################

	// Date and time
	year = moment().format('Y');
	month = moment().format('M');
	day = moment().format('D');
	hours_utc = moment().utc().format('H');
	hours = moment().format('H');
	minutes = moment().format('m');
	seconds = moment().format('s');

	// Variables for test 
	var ymdhms_timestamp_year = element(by.id("hf-d1")).element(by.className("dateform year"));
	var ymdhms_timestamp_month = element(by.id("hf-d2")).element(by.className("dateform month"));
	var ymdhms_timestamp_day = element(by.id("hf-d3")).element(by.className("dateform day"));
	var ymdhms_timestamp_hours = element(by.name("hh"));
	var ymdhms_timestamp_minutes = element(by.name("mn"));
	var ymdhms_timestamp_seconds = element(by.name("ss"));
	var timestamp = element(by.id("fs")).element(by.id("rcinput"));
	var convert_year = element(by.id("br-d1")).element(by.className("dateform year"));
	var convert_month = element(by.id("br-d2")).element(by.className("dateform month"));
	var convert_sdhm = element(by.id("tc")).element(by.id("scinput"));

	// Test case Convert epoch to human readable date and vice versa
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.epochconverter.com/');
    });

	// DONE!
	it('TC 1.1. Check date & time', () => {
		expect(ymdhms_timestamp_year.getAttribute('value')).toEqual("" + (year));
		expect(ymdhms_timestamp_month.getAttribute('value')).toEqual("" + (month));
		expect(ymdhms_timestamp_day.getAttribute('value')).toEqual("" + (day));
		expect(ymdhms_timestamp_hours.getAttribute('value')).toEqual("" + (hours_utc));
		expect(ymdhms_timestamp_minutes.getAttribute('value')).toEqual("" + minutes);
		//console.log('\nYear: ' + (1900+year) + '\nMonth: ' + (month) + '\nDay: ' + (day) + '\nTime: ' + (hours_utc) + ':' + minutes);
    });

	// TODO Ausgabe muss noch ausgelesen werden
	it('TC 1.2. Manipulate date & time and check', async function() {
		DateTimeTest.YMDHMS('1234','11','22','22','11','34');
		//browser.sleep(5000);
		//expect(ymdhms_timestamp_result.XYZ.toEqual('1111'));
		//var ymdhms_timestamp_result = element(by.id("hf-result"));
		//console.log('Hier: ' + ymdhms_timestamp_result.innerText);
    });
	// TODO Ausgabe muss noch ausgelesen werden
	it('TC 2.1 manipulate date & time and check', async function() {
		expect(timestamp.getAttribute('value')).toEqual('Wed, 08 May 2019 15:16:02 GMT'); // It will be always wrong, just ignore this error.
		DateTimeGMT.DTG('Wed, 01 May 2019 15:16:02 GMT');
    });

	// Epoch dates for the start and end of the year/month/day
	// TODO Ausgabe muss noch ausgelesen werden
	it('TC 3.1. manipulate date & time and check', async function() {
		expect(convert_year.getAttribute('value')).toEqual("" + (year));
		expect(convert_month.getAttribute('value')).toEqual("" + (month));
		ConvertYM.YM('2000','12');
    });

	// Convert seconds to days, hours and minutes
	// TODO Buttonklick funktioniert nicht & Ausgabe auslesen
	it('TC 4.1. manipulate seconds and check', async function() {
		expect(convert_sdhm.getAttribute('value')).toEqual('90061');
		ConvertSEC.SEC('20000');
	});
});

