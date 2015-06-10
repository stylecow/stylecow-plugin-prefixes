module.exports = function (stylecow) {

	//Adds -moz- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 29.0
		},
		filter: {
			type: 'Declaration',
			vendor: false,
			name: 'box-sizing'
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('moz');
		}
	});


	//Adds -webkit- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: 10.0,
			safari: 5.1,
			ios: 5.0,
			android: 4.0
		},
		filter: {
			type: 'Declaration',
			vendor: false,
			name: 'box-sizing'
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('webkit');
		}
	});
};
