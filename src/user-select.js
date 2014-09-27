module.exports = function (stylecow) {
	stylecow.addTask([
		// Adds -moz- vendor prefix
		{
			disable: {
				firefox: false
			},
			Declaration: {
				"user-select": function (declaration) {
					declaration.cloneBefore().name = '-moz-user-select';
				}
			}
		},

		// Adds -webkit- vendor prefix
		{
			disable: {
				chrome: false,
				safari: false,
				android: false,
				ios: false
			},
			Declaration: {
				"user-select": function (declaration) {
					declaration.cloneBefore().name = '-webkit-user-select';
				}
			}
		},

		// Adds -ms- vendor prefix
		{
			disable: {
				explorer: false
			},
			Declaration: {
				"user-select": function (declaration) {
					declaration.cloneBefore().name = '-ms-user-select';
				}
			}
		}
	]);
};
