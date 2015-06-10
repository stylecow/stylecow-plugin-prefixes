module.exports = function (stylecow) {
	
	//Adds -webkit- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			opera: false,
			safari: false,
			ios: false,
			android: false
		},
		filter: {
			type: 'Declaration',
			vendor: false,
			name: 'box-decoration-break'
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('webkit');
		}
	});

	//Adds -o- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			opera: 15,
		},
		filter: {
			type: 'Declaration',
			vendor: false,
			name: 'box-decoration-break'
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('o');
		}
	});
};
