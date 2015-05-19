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
				'hyphens',
				'tab-size'
			]
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('moz');
		}
	});

	// Adds -moz- vendor prefix to font-feature-settings
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 36
		},
		filter: {
			type: 'Declaration',
			name: 'font-feature-settings'
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('moz');
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
			declaration
				.cloneBefore()
				.setVendor('webkit');
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
			declaration
				.cloneBefore()
				.setVendor('ms');
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
			declaration
				.cloneBefore()
				.setVendor('o');
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
			declaration
				.cloneBefore()
				.setVendor('o');
		}
	});


	// Adds -webkit- vendor prefix to font-kerning
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: 33.0,
			safari: false,
			opera: 20,
			ios: false,
			android: 4.5,
		},
		filter: {
			type: 'Declaration',
			name: 'font-kerning'
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('webkit');
		}
	});


	// Adds -moz- vendor prefix to text-decoration
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 36.0
		},
		filter: {
			type: 'Declaration',
			name: ['text-decoration-line', 'text-decoration-color', 'text-decoration-style']
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('moz');
		}
	});


	// Adds -webkit- vendor prefix to text-decoration
	stylecow.addTask({
		forBrowsersLowerThan: {
			safari: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			name: ['text-decoration-line', 'text-decoration-color', 'text-decoration-style']
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('webkit');
		}
	});
};
