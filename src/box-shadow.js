module.exports = function (stylecow) {
	
	//Adds -moz- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 4.0
		},
		filter: {
			type: 'Declaration',
			name: 'box-shadow'
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
			name: 'box-shadow'
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('webkit');
		}
	});
};
