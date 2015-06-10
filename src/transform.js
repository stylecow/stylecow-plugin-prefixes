module.exports = function (stylecow) {
	
	//Add -moz- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 16.0
		},
		filter: {
			type: 'Declaration',
			vendor: false,
			name: /^(transform.*|perspective.*|backface-visibility)$/
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('moz');
		}
	});

	
	//Add -webkit- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: 36.0,
			opera: 23.0,
			safari: false,
			android: 40.0,
			ios: false
		},
		filter: {
			type: 'Declaration',
			vendor: false,
			name: /^(transform.*|perspective.*|backface-visibility)$/
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('webkit');
		}
	});


	//Add -o- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			opera: 12.1
		},
		filter: {
			type: 'Declaration',
			vendor: false,
			name: /^transform/
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('o');
		}
	});


	//Add -ms- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: 10.0
		},
		filter: {
			type: 'Declaration',
			vendor: false,
			name: /^transform/
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('ms');
		}
	});
};
