import {element, by, ElementFinder} from 'protractor';

export class DTG {
	public timestamp: ElementFinder = element(by.id("br-d1")).element(by.className("dateform year"));
	public timestamp_button: ElementFinder = element(by.id("br-d2")).element(by.className("dateform month"));

	DTG_manipulate(this: DTG) {
		return(datetimegmt) => {
			this.timestamp.clear();
			this.timestamp.sendKeys(datetimegmt);
			this.timestamp_button.click();
		}
	}
}