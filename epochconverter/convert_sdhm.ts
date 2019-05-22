import {element, by, ElementFinder} from 'protractor';

export class SEC {
	public convert_sdhm: ElementFinder = element(by.id("tc")).element(by.id("scinput"));
	public convert_sdhm_button: ElementFinder = element(by.id("tc")).element(by.buttonText("Seconds to days, hours, minutes"));

	constructor(seconds:string){
		this.convert_sdhm.clear();
		this.convert_sdhm.sendKeys(seconds);
		this.convert_sdhm_button.click();
   }
}