module.exports = function (stylecow) {

	// Adds -moz- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: false
		},
		filter: {
			type: 'Declaration',
			name: 'user-select'
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-moz-user-select';
		}
	});


	// Adds -webkit- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			name: 'user-select'
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-webkit-user-select';
		}
	});


	// Adds -ms- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: false
		},
		filter: {
			type: 'Declaration',
			name: 'user-select'
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-ms-user-select';
		}
	});
};
