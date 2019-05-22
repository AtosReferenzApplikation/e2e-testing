import {element, by, ElementFinder} from 'protractor';

export class YM {
	public convert_year: ElementFinder = element(by.id("br-d1")).element(by.className("dateform year"));
	public convert_month: ElementFinder = element(by.id("br-d2")).element(by.className("dateform month"));
	public convert_button: ElementFinder = element(by.buttonText("Convert"))

	constructor(year:string, month:string){
		this.convert_year.clear();
		this.convert_year.sendKeys(year);
		this.convert_month.clear();
		this.convert_month.sendKeys(month);
		this.convert_button.click();
   }
}