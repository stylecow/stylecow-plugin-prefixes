module.exports = function (stylecow) {
	stylecow.addTask([
		//Adds -moz- vendor prefixes
		{
			disable: {
				firefox: 4.0
			},
			Declaration: {
				"box-shadow": function (declaration) {
					declaration.cloneBefore().name = '-moz-box-shadow';
				}
			}
		},

		//Adds -webkit- vendor prefixes
		{
			disable: {
				chrome: 10.0,
				safari: 5.1,
				ios: 5.0,
				android: 4.0
			},
			Declaration: {
				"box-shadow": function (declaration) {
					declaration.cloneBefore().name = '-webkit-box-shadow';
				}
			}
		}
	]);
};
