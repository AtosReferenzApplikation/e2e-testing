describe('Epochconverter with protractor', function() {

	// ########## Mein ToDo ##########
	// GMT zu Local time wechseln
	// Timestamp auslesen
	// Convert seconds to days, hours and minutes => Manipulieren und vergleichen
	// Moment.js einbauen
	// ###############################

	// Datumformat
	var jetzt = new Date();
	year = jetzt.getYear();
	month = jetzt.getMonth()+1;
	day = jetzt.getDay()+5;
	hours_utc = jetzt.getHours()-2;
	hours = jetzt.getHours();
	minutes = jetzt.getMinutes();
	seconds = jetzt.getSeconds();
	
	// Variablen für Testen 
	var ymdhms_timestamp_year = element(by.id("hf-d1")).element(by.className("dateform year"));
	var ymdhms_timestamp_month = element(by.id("hf-d2")).element(by.className("dateform month"));
	var ymdhms_timestamp_day = element(by.id("hf-d3")).element(by.className("dateform day"));
	var ymdhms_timestamp_hours = element(by.name("hh"));
	var ymdhms_timestamp_minutes = element(by.name("mn"));
	var ymdhms_timestamp_seconds = element(by.name("ss"));
	var ymdhms_timestamp_button = element(by.buttonText("Human date to Timestamp"));
	// var ymdhms_timestamp_button = element(by.css("tool hf-table")).element(by.buttonText("Human date to Timestamp")); Funktioniert nicht
	var ymdhms_timestamp_result = element(by.id("hf")).element(by.id("hf-result"));
	var timestamp = element(by.id("fs")).element(by.id("rcinput"));
	var timestamp_button = element(by.id("fs")).element(by.buttonText("Human date to Timestamp"));
	var convert_year = element(by.id("br-d1")).element(by.className("dateform year"));
	var convert_month = element(by.id("br-d2")).element(by.className("dateform month"));
	var convert_button = element(by.buttonText("Convert"));
	var convert_sdhm = element(by.id("fs")).element(by.id("scinput"));
	var convert_sdhm_button = element(by.buttonText("Seconds to days, hours, minutes"));
	// var convert_year = element(by.css("td[id=br-d1] input[id=ycinput]"));

	// Test case Convert epoch to human readable date and vice versa
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.epochconverter.com/');
    });

	// DONE!
	it('TC 1.1. Check date & time', () => {
		expect(ymdhms_timestamp_year.getAttribute('value')).toEqual("" + (1900+year));
		expect(ymdhms_timestamp_hours.getAttribute('value')).toEqual("" + (hours_utc));
		expect(ymdhms_timestamp_minutes.getAttribute('value')).toEqual("" + minutes);
		//console.log('\nYear: ' + (1900+year) + '\nMonth: ' + (month) + '\nDay: ' + (day) + '\nTime: ' + (hours_utc) + ':' + minutes);
    });
	// TODO Ausgabe muss noch ausgelesen werden 
	it('TC 1.2. Manipulate date & time and check', () => {
		
		ymdhms_timestamp_year.clear();
		ymdhms_timestamp_year.getAttribute('value').sendKeys('1234');
		ymdhms_timestamp_month.clear();
		ymdhms_timestamp_month.getAttribute('value').sendKeys('11');
		ymdhms_timestamp_day.clear();
		ymdhms_timestamp_day.getAttribute('value').sendKeys('22');
		ymdhms_timestamp_hours.clear();
		ymdhms_timestamp_hours.getAttribute('value').sendKeys('22');
		ymdhms_timestamp_minutes.clear();
		ymdhms_timestamp_minutes.getAttribute('value').sendKeys('11');
		ymdhms_timestamp_seconds.clear();
		ymdhms_timestamp_seconds.getAttribute('value').sendKeys('34');
		ymdhms_timestamp_button.click();
		//browser.sleep(2000);
		//expect(ymdhms_timestamp_result.XYZ.toEqual('1111'));
		console.log('Hier: ' + ymdhms_timestamp_result.innerText);
		//browser.sleep(5000);
    });
	
	// TODO Ausgabe muss noch ausgelesen werden
	it('TC 2.1 manipulate date & time and check', () => {
		expect(timestamp.getAttribute('value')).toEqual('Wed, 08 May 2019 15:16:02 GMT'); // It will be always wrong, just ignore this error.
		timestamp.clear();
		timestamp.getAttribute('value').sendKeys('Wed, 01 May 2019 15:16:02 GMT');
		timestamp_button.click();
    });

	// Epoch dates for the start and end of the year/month/day
	// TODO Ausgabe muss noch ausgelesen werden
	it('TC 3.1. manipulate date & time and check', () => {
		expect(convert_year.getAttribute('value')).toEqual("" + (1900+year));
		expect(convert_month.getAttribute('value')).toEqual("" + (month));
		convert_year.clear();
		convert_year.getAttribute('value').sendKeys('2000');
		convert_month.clear();
		convert_month.getAttribute('value').sendKeys('12');
		convert_button.click();
    });

/*
	// Convert seconds to days, hours and minutes
	// TODO ...
	it('TC 4.1. manipulate date & time and check', () => {
		//...
    });

	//console.log('\nYear: ' + ('1234') + '\nMonth: ' + ('11') + '\nDay: ' + ('22') + '\nTime: ' + ('22') + ':' + '11');

	it('should check year ', ()	 => {
		//expect(element(by.id('ycinput')).getAttribute('value')).toEqual('2019');
		expect(ymdhms_timestamp_year.getAttribute('value')).toEqual('2019');
    });



	// Manipulate value of input --> It didn't work yet!
	it('give number 1234 in field ycinput', () => {
		ymdhms_timestamp_year.clear();
		ymdhms_timestamp_year.sendKeys('1234');
		browser.sleep(2000)
    });
	
	// Check manipulated value of input --> It didn't work yet!
    it('check year', () => {
		expect(ymdhms_timestamp_year.getAttribute('value')).toEqual('');
    });
*/
});