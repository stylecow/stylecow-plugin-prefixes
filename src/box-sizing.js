module.exports = function (stylecow) {
	stylecow.addTask([
		//Adds -moz- vendor prefixes
		{
			disable: {
				firefox: 29.0
			},
			Declaration: {
				"box-sizing": function (declaration) {
					declaration.cloneBefore().name = '-moz-box-sizing';
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
				"box-sizing": function (declaration) {
					declaration.cloneBefore().name = '-webkit-box-sizing';
				}
			}
		}
	]);
};
