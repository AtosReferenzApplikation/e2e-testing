import {element, by, ElementFinder} from 'protractor';	

export class YMDHMS {
	public ymdhms_timestamp_year: ElementFinder = element(by.id("hf-d1")).element(by.className("dateform year"));
	public ymdhms_timestamp_month: ElementFinder = element(by.id("hf-d2")).element(by.className("dateform month"));
	public ymdhms_timestamp_day: ElementFinder = element(by.id("hf-d3")).element(by.className("dateform day"));
	public ymdhms_timestamp_hours: ElementFinder = element(by.name("hh"));
	public ymdhms_timestamp_minutes: ElementFinder = element(by.name("mn"));
	public ymdhms_timestamp_seconds: ElementFinder = element(by.name("ss"));
	public ymdhms_timestamp_button: ElementFinder = element.all(by.buttonText("Human date to Timestamp")).first();
	
	constructor(year: string, month: string, day: string, hours: string, minutes: string, seconds: string) {
		this.ymdhms_timestamp_year.clear();
		this.ymdhms_timestamp_year.sendKeys(year);
		this.ymdhms_timestamp_month.clear();
		this.ymdhms_timestamp_month.sendKeys(month);
		this.ymdhms_timestamp_day.clear();
		this.ymdhms_timestamp_day.sendKeys(day);
		this.ymdhms_timestamp_hours.clear();
		this.ymdhms_timestamp_hours.sendKeys(hours);
		this.ymdhms_timestamp_minutes.clear();
		this.ymdhms_timestamp_minutes.sendKeys(minutes);
		this.ymdhms_timestamp_seconds.clear();
		this.ymdhms_timestamp_seconds.sendKeys(seconds);
		this.ymdhms_timestamp_button.click();
	}
}