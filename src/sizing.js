module.exports = function (stylecow) {
	stylecow.addTask([
		//Firefox supports "-moz-available" property rather than "-moz-fill-available"',
		{
			disable: {
				firefox: false
			},
			Declaration: function (declaration) {
				if (declaration.is(null, /^(min-|max-)?(width|height)$/, 'fill-available')) {
					declaration.cloneBefore().value = '-moz-available';
				}
			}
		},

		//Adds -moz- vendor prefix to max|min|fit-content
		{
			disable: { firefox: false },
			Declaration: function (declaration) {
				if (declaration.is(null, /^(min-|max-)?(width|height)$/, ['max-content', 'min-content', 'fit-content'])) {
					declaration.cloneBefore().value = '-moz-' + declaration.value;
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
				if (declaration.is(null, /^(min-|max-)?(width|height)$/, ['fill-available', 'max-content', 'min-content', 'fit-content'])) {
					declaration.cloneBefore().value = '-webkit-' + declaration.value;
				}
			}
		}
	]);
};
