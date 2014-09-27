module.exports = function (stylecow) {
	
	//Adds -webkit- vendor prefix

	stylecow.addTask({
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: {
			position: function (declaration) {
				if (declaration.value === 'sticky') {
					declaration.insertBefore('position: -webkit-sticky');
				}
			}
		}
	});
};
