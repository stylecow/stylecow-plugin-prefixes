module.exports = function (stylecow) {
	
	//Adds -ms- vendor prefix

	stylecow.addTask({
		disable: {
			explorer: false
		},
		Declaration: function (declaration) {
			if (declaration.is({string: 'display: grid;'})) {
				return declaration.cloneBefore().searchFirst({
					type: 'Keyword',
					name: 'grid'
				}).name = '-ms-grid';
			}

			if (declaration.is({name: /^grid.*$/})) {
				return declaration.cloneBefore().name = '-ms-' + declaration.name;
			}
		}
	});
};
