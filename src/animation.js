module.exports = function (stylecow) {

	stylecow.addTask([
		//Adds -moz- vendor prefixes
		{
			disable: {
				firefox: 16.0
			},
			Declaration: function (declaration) {
				if (declaration.is({name: /^animation/})) {
					declaration.cloneBefore().name = '-moz-' + declaration.name;
				}
			},
			NestedAtRule: {
				"keyframes": function (atrule) {
					atrule.cloneBefore().name = '-moz-' + atrule.name;
				}
			}
		},

		//Adds -o- vendor prefixes
		{
			disable: {
				opera: 12.1
			},
			Declaration: function (declaration) {
				if (declaration.is({name: /^animation/})) {
					declaration.cloneBefore().name = '-o-' + declaration.name;
				}
			},
			NestedAtRule: {
				"keyframes": function (atrule) {
					atrule.cloneBefore().name = '-o-' + atrule.name;
				}
			}
		},

		//Adds -webkit- vendor prefixes
		{
			disable: {
				chrome: false,
				safari: false,
				android: false,
				ios: false
			},
			Declaration: function (declaration) {
				if (declaration.is({name: /^animation/})) {
					declaration.cloneBefore().name = '-webkit-' + declaration.name;
				}
			},
			NestedAtRule: {
				"keyframes": function (atrule) {
					atrule.cloneBefore().name = '-webkit-' + atrule.name;
				}
			}
		}
	]);
};
