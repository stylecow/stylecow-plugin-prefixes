module.exports = function (stylecow) {
	
	//Add -moz- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 16.0
		},
		filter: {
			type: 'Declaration',
			name: /^(transform.*|perspective.*|backface-visibility)$/
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-moz-' + declaration.name;
		}
	});

	
	//Add -webkit- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			name: /^(transform.*|perspective.*|backface-visibility)$/
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-webkit-' + declaration.name;
		}
	});


	//Add -o- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			opera: 12.1
		},
		filter: {
			type: 'Declaration',
			name: /^transform/
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-o-' + declaration.name;
		}
	});


	//Add -ms- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: 10.0
		},
		filter: {
			type: 'Declaration',
			name: /^transform/
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-ms-' + declaration.name;
		}
	});
};
