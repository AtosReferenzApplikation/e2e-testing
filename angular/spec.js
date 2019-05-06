describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var operator = element(by.model('operator'));
  var add = element(by.xpath(".//option[@value= 'ADDITION']"));
  var div = element(by.xpath(".//option[@value= 'DIVISION']"));
  var mod = element(by.xpath(".//option[@value= 'MODULO']"));
  var mul = element(by.xpath(".//option[@value= 'MULTIPLICATION']"));
  var sub = element(by.xpath(".//option[@value= 'SUBTRACTION']"));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });


  it('should add four and six', function() {
    firstNumber.sendKeys(2);
	expect(firstNumber.getAttribute('value')).toEqual('2');
    secondNumber.sendKeys(12);
	expect(secondNumber.getAttribute('value')).toEqual('12');
    operator.click();
	add.click();
	goButton.click();
    expect(latestResult.getText()).toEqual('14');
  });
 
  it('should add four and six', function() {
    firstNumber.sendKeys(3);
    secondNumber.sendKeys(2);
    operator.click();
	mul.click();
	goButton.click();
    expect(latestResult.getText()).toEqual('6');
  }); // It should be wrong!

  it('should sub 32 and 21', function() {
    firstNumber.sendKeys(32);
    secondNumber.sendKeys(21);
    operator.click();
	sub.click();
	goButton.click();
    expect(latestResult.getText()).toEqual('11');
  }); 
  
  it('should div 55 and 11', function() {
    firstNumber.sendKeys(55);
    secondNumber.sendKeys(11);
    operator.click();
	div.click();
	goButton.click();
    expect(latestResult.getText()).toEqual('10');
  }); // It should be wrong!
  
  it('should add four and six', function() {
    firstNumber.sendKeys(23);
    secondNumber.sendKeys(12);
    operator.click();
	mod.click();
	goButton.click();
    expect(latestResult.getText()).toEqual('11');
  });
});