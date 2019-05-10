module.exports = {
	variables: {
		convert_sdhm: element(by.id("tc")).element(by.id("scinput")),
		convert_sdhm_button: element(by.id("tc")).element(by.buttonText("Seconds to days, hours, minutes"))
	},

	SEC: function(seconds) {
		var ToDo = this.variables;
		
		ToDo.convert_sdhm.clear();
		ToDo.convert_sdhm.getAttribute('value').sendKeys(seconds);
		//ToDo.convert_sdhm_button.click(); //Funktioniert nicht
	}
};