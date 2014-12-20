module.exports = function (stylecow) {
	stylecow.addTask([
		//Firefox supports "-moz-available" property rather than "-moz-fill-available"',
		{
			disable: {
				firefox: false
			},
			Declaration: function (declaration) {
				if (declaration.is({
					string: /^(min-|max-)?(width|height): fill-available;$/
				})) {
					declaration.cloneBefore().searchFirst({
						type: 'Keyword',
						name: 'fill-available'
					}).name = '-moz-available';
				}
			}
		},

		//Adds -moz- vendor prefix to max|min|fit-content
		{
			disable: { firefox: false },
			Declaration: function (declaration) {
				if (declaration.is({
					string: /^(min-|max-)?(width|height): (max-content|min-content|fit-content);$/
				})) {
					var keyword = declaration.cloneBefore().searchFirst({
						type: 'Keyword',
						name: ['max-content', 'min-content', 'fit-content']
					});

					keyword.name = '-moz-' + keyword.name;
				}
			}
		},

		//Adds -webkit- vendor prefixes
		{
			disable: {
				chrome: false,
				safari: false,
				opera: false,
				android: false,
				ios: false
			},
			Declaration: function (declaration) {
				if (declaration.is({
					string: /^(min-|max-)?(width|height): (fill-available|max-content|min-content|fit-content);$/
				})) {
					var keyword = declaration.cloneBefore().searchFirst({
						type: 'Keyword',
						name: ['fill-available', 'max-content', 'min-content', 'fit-content']
					});

					keyword.name = '-webkit-' + keyword.name;
				}
			}
		}
	]);
};
