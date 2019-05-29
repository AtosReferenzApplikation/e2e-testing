import { browser, element, by } from 'protractor';

import { YearMonth } from "./epochconverter/convert";
import { SecondsConvert } from './epochconverter/convert_sdhm';
import { DateTimeGMT } from './epochconverter/timestamp';
import { YearMonthDayHoursMinutesSeconds } from './epochconverter/ymdhms_timestamp';
import * as moment from 'moment';

describe('Epochconverter with protractor -', function() {

	// ########## Mein ToDo ##########
	// GMT zu Local time wechseln
	// Timestamp to Human date fehlt noch
	// Jeweils Rückkgabe nach Buttonklick auslesen
	// ###############################
	// Date and time from moment.js
	let year = moment().format('Y');
	let month = moment().format('M');
	let day = moment().format('D');
	let hours_utc = moment().utc().format('H');
	//let hours = moment().format('H');
	let minutes = moment().format('m');

	//let seconds = moment().format('s');
	// Variables for expect_toEqual
	let ymdhms_timestamp_year = element(by.id("hf-d1")).element(by.className("dateform year"));
	let ymdhms_timestamp_month = element(by.id("hf-d2")).element(by.className("dateform month"));
	let ymdhms_timestamp_day = element(by.id("hf-d3")).element(by.className("dateform day"));
	let ymdhms_timestamp_hours = element(by.name("hh"));
	let ymdhms_timestamp_minutes = element(by.name("mn"));
	//let ymdhms_timestamp_seconds = element(by.name("ss"));
	let timestamp = element(by.id("fs")).element(by.id("rcinput"));
	let convert_year = element(by.id("br-d1")).element(by.className("dateform year"));
	let convert_month = element(by.id("br-d2")).element(by.className("dateform month"));
	let convert_sdhm = element(by.id("tc")).element(by.id("scinput"));

	let textresult = element(by.name("hf")).element(by.id("hf-result"));

	// Test case Convert epoch to human readable date and vice versa
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.epochconverter.com/');
    });

	// DONE!
	it('TC 1.1. Check current date & time', () => {
		expect(ymdhms_timestamp_year.getAttribute('value')).toEqual("" + (year));
		expect(ymdhms_timestamp_month.getAttribute('value')).toEqual("" + (month));
		expect(ymdhms_timestamp_day.getAttribute('value')).toEqual("" + (day));
		expect(ymdhms_timestamp_hours.getAttribute('value')).toEqual("" + (hours_utc));
		expect(ymdhms_timestamp_minutes.getAttribute('value')).toEqual("" + minutes);
    });

	// TODO Ausgabe muss noch ausgelesen werden
	it('TC 1.2. Manipulate date & time and check', () => {
		const DateTimeTest = new YearMonthDayHoursMinutesSeconds();
		DateTimeTest.perform('1234', '11', '22', '22', '11', '34');
		browser.sleep(2000);
		//expect(ymdhms_timestamp_day.getAttribute('value')).toEqual('1234');
		//expect(element(by.id("hf-result")).toEqual('23'));
	    console.log("HERE RESULT: " + textresult.getAttribute("innerHTML"));
	});

	// TODO Ausgabe muss noch ausgelesen werden
	it('TC 2.1 manipulate date & time and check', () => {
		expect(timestamp.getAttribute('value')).toEqual('Wed, 08 May 2019 15:16:02 GMT'); // It will be always wrong, just ignore this error.
		const DateTime = new DateTimeGMT();
		DateTime.perform('Wed, 01 May 2019 15:16:02 GMT');
    });
	// Epoch dates for the start and end of the year/month/day

	// TODO Ausgabe muss noch ausgelesen werden
	it('TC 3.1. manipulate date & time and check', () => {
		expect(convert_year.getAttribute('value')).toEqual("" + (year));
		expect(convert_month.getAttribute('value')).toEqual("" + (month));
		const ConvertYM = new YearMonth();
		ConvertYM.perform('2000','12');
	});
	// Convert seconds to days, hours and minutes

	// TODO Buttonklick funktioniert nicht & Ausgabe auslesen
	it('TC 4.1. manipulate seconds and check', () => {
		expect(convert_sdhm.getAttribute('value')).toEqual('90061');
		const ConvertSEC = new SecondsConvert();
		ConvertSEC.perform(20000);
	});
});