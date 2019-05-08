describe('Epochconverter with protractor', function() {

	// ########## Mein ToDo ##########
	// GMT zu Local time wechseln
	// Timestamp auslesen
	// Convert seconds to days, hours and minutes => Manipulieren und vergleichen
	// ###############################

	// Datumformat
	var jetzt = new Date();
	year = jetzt.getYear();
	month = jetzt.getMonth();
	day = jetzt.getDay();
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




//	var ymdhms_timestamp_year = element(by.css("td[id=br-d1] input[id=ycinput]"));
	var convert_button = element(by.buttonText("Convert"));

	// var ymdhms_timestamp_button = element.all(by.css(".tool hf-table")).all(by.css(".button")); --> BACKUP

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.epochconverter.com/');
    });

/*
	// DONE!
	it('should check year ', () => {
		expect(ymdhms_timestamp_year.getAttribute('value')).toEqual("" + (1900+year));
		expect(ymdhms_timestamp_hours.getAttribute('value')).toEqual("" + (hours-2));
		expect(ymdhms_timestamp_minutes.getAttribute('value')).toEqual("" + minutes);
		console.log('\nYear: ' + (1900+year) + '\nMonth: ' + (month) + '\nDay: ' + (day) + '\nTime: ' + (hours) + ':' + minutes);
    });
*/
	// Rückgabe prüfen
	it('manipulate date & time and check ', () => {
		/*
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
		*/
		ymdhms_timestamp_button.click();
		browser.sleep(2000);
		//expect(ymdhms_timestamp_result.XYZ.toEqual('2019'));
		console.log(ymdhms_timestamp_result.getAttribute('value'));
		//browser.sleep(5000);
		
		
		
		//console.log('\nYear: ' + ('1234') + '\nMonth: ' + ('11') + '\nDay: ' + ('22') + '\nTime: ' + ('22') + ':' + '11');
    });
/*	
		browser.sleep(2000)
		convert_button.click();
		browser.sleep(2000)
	});

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