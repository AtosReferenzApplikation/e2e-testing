import {element, by} from 'protractor';	

module.exports = {
	variables: {
		ymdhms_timestamp_year: element(by.id("hf-d1")).element(by.className("dateform year")),
		ymdhms_timestamp_month: element(by.id("hf-d2")).element(by.className("dateform month")),
		ymdhms_timestamp_day: element(by.id("hf-d3")).element(by.className("dateform day")),
		ymdhms_timestamp_hours: element(by.name("hh")),
		ymdhms_timestamp_minutes: element(by.name("mn")),
		ymdhms_timestamp_seconds: element(by.name("ss")),
		ymdhms_timestamp_button: element.all(by.buttonText("Human date to Timestamp")).first()
	},
	
	YMDHMS: function(year, month, day, hours, minutes, seconds) {
		var ToDo = this.variables;

		ToDo.ymdhms_timestamp_year.clear();
		ToDo.ymdhms_timestamp_year.sendKeys(year);
		ToDo.ymdhms_timestamp_month.clear();
		ToDo.ymdhms_timestamp_month.sendKeys(month);
		ToDo.ymdhms_timestamp_day.clear();
    	ToDo.ymdhms_timestamp_day.sendKeys(day);
		ToDo.ymdhms_timestamp_hours.clear();
		ToDo.ymdhms_timestamp_hours.sendKeys(hours);
		ToDo.ymdhms_timestamp_minutes.clear();
		ToDo.ymdhms_timestamp_minutes.sendKeys(minutes);
		ToDo.ymdhms_timestamp_seconds.clear();
    	ToDo.ymdhms_timestamp_seconds.sendKeys(seconds);
		//await ToDo.ymdhms_timestamp_button.click();
	}
};