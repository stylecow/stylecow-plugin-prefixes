module.exports = function (stylecow) {
	stylecow.addTask([
		//Adds -moz- vendor prefixes
		{
			disable: {
				firefox: 4.0
			},
			Declaration: {
				"background-size": function (declaration) {
					declaration.cloneBefore().name = '-moz-background-size';
				},
				"background-clip": function (declaration) {
					declaration.cloneBefore().name = '-moz-background-clip';
				},
				"background-origin": function (declaration) {
					declaration.cloneBefore().name = '-moz-background-origin';
				}
			}
		},

		//Adds -o- vendor prefixes
		{
			disable: {
				opera: 10.5
			},
			Declaration: {
				"background-size": function (declaration) {
					declaration.cloneBefore().name = '-o-background-size';
				},
				"background-clip": function (declaration) {
					declaration.cloneBefore().name = '-o-background-clip';
				},
				"background-origin": function (declaration) {
					declaration.cloneBefore().name = '-o-background-origin';
				}
			}
		},

		//Adds -webkit- vendor prefixes
		{
			disable: {
				android: 3.0
			},
			Declaration: {
				"background-size": function (declaration) {
					declaration.cloneBefore().name = '-webkit-background-size';
				},
				"background-clip": function (declaration) {
					declaration.cloneBefore().name = '-webkit-background-clip';
				},
				"background-origin": function (declaration) {
					declaration.cloneBefore().name = '-webkit-background-origin';
				}
			}
		}
	]);
};
