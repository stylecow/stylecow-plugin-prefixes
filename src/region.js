module.exports = function (stylecow) {
	stylecow.addTask([
		// Adds -webkit- vendor prefix
		{
			disable: {
				chrome: false,
				safari: false,
				android: false,
				ios: false
			},
			Declaration: function (declaration) {
				if (declaration.is(null, 'region-fragment')) {
					return declaration.cloneBefore().name = '-webkit-region-fragment';
				}

				if (declaration.is(null, /^flow/)) {
					return declaration.cloneBefore().name = '-webkit-' + declaration.name;
				}
			}
		},

		// Adds -ms- vendor prefix
		{
			disable: {
				explorer: false
			},
			Declaration: function (declaration) {
				if (declaration.is(null, /^flow/)) {
					return declaration.cloneBefore().name = '-ms-' + declaration.name;
				}
			}
		}
	]);
};
