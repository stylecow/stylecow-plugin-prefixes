module.exports = function (stylecow) {

	//Adds -moz- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: false
		},
		filter: {
			type: 'Declaration',
			name: 'appearance'
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-moz-appearance';
		}
	});

	//Adds -webkit- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			name: 'appearance'
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-webkit-appearance';
		}
	});
};
