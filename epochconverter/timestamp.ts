import {element, by, ElementFinder} from 'protractor';

export class DTG {
	public timestamp: ElementFinder = element(by.id("br-d1")).element(by.className("dateform year"));
	public timestamp_button: ElementFinder = element(by.id("br-d2")).element(by.className("dateform month"));

	constructor(datetimegmt: string) {
		this.timestamp.clear();
		this.timestamp.getAttribute('value').sendKeys(datetimegmt);
		this.timestamp_button.click();
	}
}