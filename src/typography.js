module.exports = function (stylecow) {
	stylecow.addTask([
		// Adds -moz- vendor prefix
		{
			disable: {
				firefox: false
			},
			Declaration: {
				"text-align-last": function (declaration) {
					declaration.cloneBefore().name = '-moz-text-align-last';
				},
				"font-feature-settings": function (declaration) {
					declaration.cloneBefore().name = '-moz-font-feature-settings';
				},
				"hyphens": function (declaration) {
					declaration.cloneBefore().name = '-moz-hyphens';
				},
				"tab-size": function (declaration) {
					declaration.cloneBefore().name = '-moz-tab-size';
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
				"font-feature-settings": function (declaration) {
					declaration.cloneBefore().name = '-webkit-font-feature-settings';
				},
				"text-size-adjust": function (declaration) {
					declaration.cloneBefore().name = '-webkit-text-size-adjust';
				},
				"hyphens": function (declaration) {
					declaration.cloneBefore().name = '-webkit-hyphens';
				}
			}
		},

		// Adds -ms- vendor prefix to text-size-adjust
		{
			disable: {
				explorer: false
			},
			Declaration: {
				"text-size-adjust": function (declaration) {
					declaration.cloneBefore().name = '-ms-text-size-adjust';
				},
				"hyphens": function (declaration) {
					declaration.cloneBefore().name = '-ms-hyphens';
				}
			}
		},

		// Adds -o- vendor prefix to text-overflow
		{
			disable: {
				opera: 11.0
			},
			Declaration: {
				"text-overflow": function (declaration) {
					declaration.cloneBefore().name = '-o-text-overflow';
				}
			}
		},

		// Adds -o- vendor prefix to tab-size
		{
			disable: {
				opera: 15.0
			},
			Declaration: {
				"tab-size": function (declaration) {
					declaration.cloneBefore().name = '-o-tab-size';
				}
			}
		}
	]);
};
