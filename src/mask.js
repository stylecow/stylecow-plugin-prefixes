module.exports = function (stylecow) {
	
	//Adds -webkit- vendor prefix

	stylecow.addTask({
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, /^mask/)) {
				declaration.cloneBefore().name = '-webkit-' + declaration.name;
			}
		}
	});
};
