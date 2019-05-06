describe('Protractor Demo App', function() {

	var timestamp_year = element(by.css("td[id=br-d1] input[id=ycinput]"));

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.epochconverter.com/');
    });

	it('should load Home-Page ', () => {
		//expect(element(by.id('ycinput')).getAttribute('value')).toEqual('2019');
		expect(timestamp_year.getAttribute('value')).toEqual('2019');
    });

/*
	it('give number 1234 in field ycinput', function () {
		// element(by.id('ycinput')).sendKeys('1234');
		timestamp_year.clear();
    });
    it('check year 1234', function () {
		//expect(element(by.id('ycinput')).getAttribute('value')).toEqual('2019');
		expect(timestamp_year.getAttribute('value')).toEqual('');
    });
*/
});

/*

element(by.css("td[br-d1] input[className=dateform year]"));
element(by.css("chk-select[rowobj=clusters] input[type=checkbox]"));

<td id="br-d1"><input class="dateform year" type="text" id="ycinput" size="4" maxlength="4" value="2019" name="yyyy" aria-label="Year"><span class="datesep">-</span></td>

*/