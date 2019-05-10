module.exports = {
	variables: {
		convert_year: element(by.id("br-d1")).element(by.className("dateform year")),
		convert_month: element(by.id("br-d2")).element(by.className("dateform month")),
		convert_button: element(by.buttonText("Convert"))
	},

	YM: function(year, month) {
		var ToDo = this.variables;
		
		ToDo.convert_year.clear();
		ToDo.convert_year.sendKeys(year);
		ToDo.convert_month.clear();
		ToDo.convert_month.sendKeys(month);
		//ToDo.convert_button.click(); //Funktioniert bisher nicht
	}
};