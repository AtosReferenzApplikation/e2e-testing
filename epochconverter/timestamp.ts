import {element, by, ElementFinder} from 'protractor';

export class DTG {
	public timestamp: ElementFinder = element(by.id("br-d1")).element(by.className("dateform year"));
	public timestamp_button: ElementFinder = element(by.id("br-d2")).element(by.className("dateform month"));

	public async perform(datetimegmt:string) {
		await this.timestamp.clear();
		this.timestamp.sendKeys(datetimegmt);
		await this.timestamp_button.click();
	}
}