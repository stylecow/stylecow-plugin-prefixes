module.exports = function (stylecow) {
	stylecow.addTask([
		//Adds -moz- vendor prefixes
		{
			disable: {
				firefox: false
			},
			Declaration: {
				"appearance": function (declaration) {
					declaration.cloneBefore().name = '-moz-appearance';
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
			Declaration: {
				"appearance": function (declaration) {
					declaration.cloneBefore().name = '-webkit-appearance';
				}
			}
		}
	]);
};
