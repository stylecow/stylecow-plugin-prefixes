module.exports = function (stylecow) {
	stylecow.addTask([
		//Adds -moz- vendor prefix
		{
			disable: {
				firefox: 16.0
			},
			Declaration: function (declaration) {
				if (declaration.has('Function', 'calc')) {
					declaration.cloneBefore().search('Function', 'calc').forEach(function (fn) {
						fn.name = '-moz-' + fn.name;
					});
				}
			}
		},

		//Adds -webkit- vendor prefix
		{
			disable: {
				chrome: 26.0,
				safari: 6.1,
				ios: 7.0
			},
			Declaration: function (declaration) {
				if (declaration.has('Function', 'calc')) {
					declaration.cloneBefore().search('Function', 'calc').forEach(function (fn) {
						fn.name = '-webkit-' + fn.name;
					});
				}
			}
		}
	]);
};
