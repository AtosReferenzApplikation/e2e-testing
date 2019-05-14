// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
	'spec.ts',
	'spec_convert.ts',
	'spec_convert_sdhm',
	'spec_timestamp',
	'spec_ymdhms_timestamp'
  ]
};