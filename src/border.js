module.exports = function (stylecow) {

	//Fix old syntax in firefox <13 in border-radius
	var names = {
		'border-top-left-radius': '-moz-border-radius-topleft',
		'border-top-right-radius': '-moz-border-radius-topright',
		'border-bottom-left-radius': '-moz-border-radius-bottomleft',
		'border-bottom-right-radius': '-moz-border-radius-bottomright'
	};

	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 13.0
		},
		filter: {
			type: 'Declaration',
			name: Object.keys(names)
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = names[declaration.name];
		}
	});


	//Adds -moz- vendor prefix to border-radius
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 4.0
		},
		filter: {
			type: 'Declaration',
			name: 'border-radius'
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-moz-border-radius';
		}
	});


	//Adds -webkit- vendor prefix to border-radius
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: 5.0,
			safari: 5.0,
			ios: 4.0,
			android: 2.2
		},
		filter: {
			type: 'Declaration',
			name: /^border-.*radius$/
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-webkit-' + declaration.name;
		}
	});


	//Adds -webkit- vendor prefix to border-start,end,after,before
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			name: /^border-(start|end|after|before)/
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-webkit-' + declaration.name;
		}
	});


	//Adds -moz- vendor prefix to border-start,end
	stylecow.addTask({
		forBrowsersLowerThan: { 
			firefox: false
		},
		filter: {
			type: 'Declaration',
			name: /^border-(start|end)/
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-moz-' + declaration.name;
		}
	});


	//Adds -moz- vendor prefix to border-image
	stylecow.addTask({
		forBrowsersLowerThan: { 
			firefox: 15.0
		},
		filter: {
			type: 'Declaration',
			name: /^border-image/
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-moz-' + declaration.name;
		}
	});


	//Adds -o- vendor prefix to border-image
	stylecow.addTask({
		forBrowsersLowerThan: { 
			opera: 15.0
		},
		filter: {
			type: 'Declaration',
			name: /^border-image/
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-o-' + declaration.name;
		}
	});


	//Adds -webkit- vendor prefix to border-image
	stylecow.addTask({
		forBrowsersLowerThan: { 
			chrome: 16.0,
			safari: 6.0,
			android: 4.4
		},
		filter: {
			type: 'Declaration',
			name: /^border-image/
		},
		fn: function (declaration) {
			declaration.cloneBefore().name = '-webkit-' + declaration.name;
		}
	});
};
