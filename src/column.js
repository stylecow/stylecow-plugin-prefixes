module.exports = function (stylecow) {

	// Adds -moz- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: false
		},
		filter: {
			type: 'Declaration',
			name: /^column/
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-moz-' + declaration.name;
		}
	});


	// Adds -webkit- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			name: /^column/
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-webkit-' + declaration.name;
		}
	});
};
