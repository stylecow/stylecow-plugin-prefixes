module.exports = function (stylecow) {
	
	//Firefox supports "-moz-available" property rather than "-moz-fill-available"',
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: false
		},
		filter: {
			type: 'Declaration',
			string: /^(min-|max-)?(width|height): fill-available;$/
		},
		fn: function (declaration) {
			declaration.cloneBefore().searchFirst({
				type: 'Keyword',
				name: 'fill-available'
			}).name = '-moz-available';
		}
	});


	//Adds -moz- vendor prefix to max|min|fit-content
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: false
		},
		filter: {
			type: 'Declaration',
			string: /^(min-|max-)?(width|height): (max-content|min-content|fit-content);$/
		},
		fn: function (declaration) {
			var keyword = declaration.cloneBefore().searchFirst({
				type: 'Keyword',
				name: ['max-content', 'min-content', 'fit-content']
			});

			keyword.name = '-moz-' + keyword.name;
		}
	});


	//Adds -webkit- vendor prefixes
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			safari: false,
			opera: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			string: /^(min-|max-)?(width|height): (fill-available|max-content|min-content|fit-content);$/
		},
		fn: function (declaration) {
			var keyword = declaration.cloneBefore().searchFirst({
				type: 'Keyword',
				name: ['fill-available', 'max-content', 'min-content', 'fit-content']
			});

			keyword.name = '-webkit-' + keyword.name;
		}
	});
};
