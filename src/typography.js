module.exports = function (stylecow) {

	// Adds -moz- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: false
		},
		filter: {
			type: 'Declaration',
			name: [
				'text-align-last',
				'font-feature-settings',
				'hyphens',
				'tab-size'
			]
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-moz-' + declaration.name;
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
			name: [
				'font-feature-settings',
				'text-size-adjust',
				'hyphens'
			]
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-webkit-' + declaration.name;
		}
	});


	// Adds -ms- vendor prefix to text-size-adjust
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: false
		},
		filter: {
			type: 'Declaration',
			name: [
				'text-size-adjust',
				'hyphens'
			]
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-ms-' + declaration.name;
		}
	});


	// Adds -o- vendor prefix to text-overflow
	stylecow.addTask({
		forBrowsersLowerThan: {
			opera: 11.0
		},
		filter: {
			type: 'Declaration',
			name: 'text-overflow'
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-o-' + declaration.name;
		}
	});


	// Adds -o- vendor prefix to tab-size
	stylecow.addTask({
		forBrowsersLowerThan: {
			opera: 15.0
		},
		filter: {
			type: 'Declaration',
			name: 'tab-size'
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-o-' + declaration.name;
		}
	});
};
