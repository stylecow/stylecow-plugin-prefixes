module.exports = function (stylecow) {

	stylecow.addTask([
		// Adds -moz- vendor prefixes
		{
			disable: {
				firefox: false
			},
			Declaration: function (declaration) {
				if (declaration.is({name: /^column/})) {
					declaration.cloneBefore().name = '-moz-' + declaration.name;
				}
			}
		},

		// Adds -webkit- vendor prefixes
		{
			disable: {
				chrome: false,
				safari: false,
				android: false,
				ios: false
			},
			Declaration: function (declaration) {
				if (declaration.is({name: /^column/})) {
					declaration.cloneBefore().name = '-webkit-' + declaration.name;
				}
			}
		}
	]);
};
