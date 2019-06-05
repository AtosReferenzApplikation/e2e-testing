import {element, by, ElementFinder} from 'protractor';

export class YearMonthDayHoursMinutesSeconds {
	public ymdhms_timestamp_year: ElementFinder;
	public ymdhms_timestamp_month: ElementFinder;
	public ymdhms_timestamp_day: ElementFinder;
	public ymdhms_timestamp_hours: ElementFinder;
	public ymdhms_timestamp_minutes: ElementFinder;
	public ymdhms_timestamp_seconds: ElementFinder;
	public ymdhms_timestamp_button: ElementFinder;

	constructor() {
		this.ymdhms_timestamp_year = element(by.id("hf-d1")).element(by.className("dateform year")),
		this.ymdhms_timestamp_month = element(by.id("hf-d2")).element(by.className("dateform month")),
		this.ymdhms_timestamp_day = element(by.id("hf-d3")).element(by.className("dateform day")),
		this.ymdhms_timestamp_hours = element(by.name("hh")),
		this.ymdhms_timestamp_minutes = element(by.name("mn")),
		this.ymdhms_timestamp_seconds = element(by.name("ss")),
		this.ymdhms_timestamp_button = element.all(by.buttonText("Human date to Timestamp")).first()
	}

	public async perform(year: string, month: string, day: string, hours: string, minutes: string, seconds: string) {
		await this.ymdhms_timestamp_year.clear();
		this.ymdhms_timestamp_year.sendKeys(year);
		await this.ymdhms_timestamp_month.clear();
		this.ymdhms_timestamp_month.sendKeys(month);
		await this.ymdhms_timestamp_day.clear();
		this.ymdhms_timestamp_day.sendKeys(day);
		await this.ymdhms_timestamp_hours.clear();
		this.ymdhms_timestamp_hours.sendKeys(hours);
		await this.ymdhms_timestamp_minutes.clear();
		this.ymdhms_timestamp_minutes.sendKeys(minutes);
		await this.ymdhms_timestamp_seconds.clear();
		this.ymdhms_timestamp_seconds.sendKeys(seconds);
		await this.ymdhms_timestamp_button.click();
	}
	//public async ConvertedValue: Promise<string>{}

	public CoP: number = 1;
	let PromiseTest = new Promise((resolve, reject) => {
		setTimeout(function() {
			resolve(this.CoP);
		}, 1000);
	});
	PromiseTest.then((val) => {
		console.log('Done!');
	}).catch((reason) => {
		console.log('Error ('+reason+') here.');
	});
}