import {element, by} from 'protractor';

module.exports = {
	variables: {	
		timestamp: element(by.id("fs")).element(by.id("rcinput")),
		timestamp_button: element(by.id("fs")).element(by.buttonText("Human date to Timestamp"))
	},

	DTG: function(datetimegmt) {
		var ToDo = this.variables;

		ToDo.timestamp.clear();
		ToDo.timestamp.getAttribute('value').sendKeys(datetimegmt);
		//await ToDo.timestamp_button.click();

	}
};