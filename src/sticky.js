module.exports = function (stylecow) {
	
	//Adds -webkit- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			string: 'position: sticky;'
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.get('Keyword')
				.setVendor('webkit');
		}
	});
};
