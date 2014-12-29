module.exports = function (stylecow) {
	
	//Adds -moz- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 4.0
		},
		filter: {
			type: 'Declaration',
			name: [
				'background-size',
				'background-clip',
				'background-origin'
			]
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.set('name', '-moz-' + declaration.name);
		}
	});


	//Adds -o- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			opera: 10.5
		},
		filter: {
			type: 'Declaration',
			name: [
				'background-size',
				'background-clip',
				'background-origin'
			]
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.set('name', '-o-' + declaration.name);
		}
	});


	//Adds -webkit- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			android: 3.0
		},
		filter: {
			type: 'Declaration',
			name: [
				'background-size',
				'background-clip',
				'background-origin'
			]
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.set('name', '-webkit-' + declaration.name);
		}
	});
};
