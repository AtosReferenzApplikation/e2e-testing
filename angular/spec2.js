describe('Protractor Demo App', function() {

	// ########## Mein ToDo ##########
	// Convert epoch to human readable date and vice versa => Manipulieren und vergleichen
	// GMT zu Local time wechseln
	// Button klicken und Timestamp auslesen
	// Epoch dates for the start and end of the year/month/day => Manipulieren und vergleichen
	// Convert seconds to days, hours and minutes => Manipulieren und vergleichen
	// ###############################

	// Datumformat
	var jetzt = new Date();
	h = jetzt.getHours();
	m = jetzt.getMinutes();
	
	// Variablen für Testen
	var timestamp_year = element(by.css("td[id=br-d1] input[id=ycinput]"));
	var timestamp_hours = element(by.name("hh"));
	var timestamp_minutes = element(by.name("mn"));
	var timestamp = element(by.name("hf-result"));
	var timestamp_button = element.all(by.buttonText("uman date to Timestamp"));
	// var timestamp_button = element.all(by.css(".tool hf-table")).all(by.css(".button")); --> BACKUP

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.epochconverter.com/');
    });

	it('should check year ', () => {
		expect(timestamp_year.getAttribute('value')).toEqual('2019');
    });

	it('should check hours ', () => {
		expect(timestamp_hours.getAttribute('value')).toEqual("" + (h-2));
    });

	it('should check minutes ', () => {
		expect(timestamp_minutes.getAttribute('value')).toEqual("" + m);
    });
	
	// Click on button --> It didn't work yet!	
	it('timestamp auswertung auslesen ', () => {
		timestamp_button.click();
	//	browser.sleep(5000)
		// console.log(timestamp);	
	});

	it('should check year ', () => {
		//expect(element(by.id('ycinput')).getAttribute('value')).toEqual('2019');
		expect(timestamp_year.getAttribute('value')).toEqual('2019');
    });

	// Manipulate value of input --> It didn't work yet!
	it('give number 1234 in field ycinput', () => {
		timestamp_year.clear();
		timestamp_year.sendKeys('1234');
    });
	
	// Check manipulated value of input --> It didn't work yet!
    it('check year', () => {
		expect(timestamp_year.getAttribute('value')).toEqual('');
    });
});