module.exports = function (stylecow) {
	
	//Adds -ms- vendor prefix

	stylecow.addTask({
		disable: {
			explorer: false
		},
		Declaration: function (declaration) {
			if (declaration.is({name: 'display', value: 'grid'})) {
				return declaration.cloneBefore().value = '-ms-grid';
			}

			if (declaration.is({name: /^grid.*$/})) {
				return declaration.cloneBefore().name = '-ms-' + declaration.name;
			}
		}
	});
};
