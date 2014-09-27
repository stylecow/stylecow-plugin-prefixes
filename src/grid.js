module.exports = function (stylecow) {
	
	//Adds -ms- vendor prefix

	stylecow.addTask({
		disable: {
			explorer: false
		},
		Declaration: function (declaration) {
			if (declaration.is(null, 'display', 'grid')) {
				return declaration.cloneBefore().value = '-ms-grid';
			}

			if (declaration.is(null, /^grid.*$/)) {
				return declaration.cloneBefore().name = '-ms-' + declaration.name;
			}
		}
	});
};
