module.exports = function (stylecow) {
	
	//Adds -webkit- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			opera: false,
			safari: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			vendor: false,
			name: 'clip-path'
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('webkit');
		}
	});
};
