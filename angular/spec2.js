describe('Protractor Demo App', function() {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.epochconverter.com/');
    });

    it('check year 2019', function () {
        expect(element(by.id('ycinput')).getAttribute('value')).toEqual('2019');
    });

/*
	it('give number 1234 in field ycinput', function () {
        element(by.id('ycinput')).getAttribute('value').sendKeys('1234');
    });

    it('check year 1234', function () {
        expect(element(by.id('ycinput')).getAttribute('value')).toEqual('1234');
    });
*/
});