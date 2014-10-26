module.exports = function (stylecow) {

	stylecow.addTask([
		//Adds -moz- vendor prefix
		{
			disable: {
				firefox: 16.0
			},
			Declaration: function (declaration) {
				if (declaration.has({type: 'Function', name: 'calc'})) {
					declaration.cloneBefore().search({type: 'Function', name: 'calc'}).forEach(function (fn) {
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
				if (declaration.has({type: 'Function', name: 'calc'})) {
					declaration.cloneBefore().search({type: 'Function', name: 'calc'}).forEach(function (fn) {
						fn.name = '-webkit-' + fn.name;
					});
				}
			}
		}
	]);
};
