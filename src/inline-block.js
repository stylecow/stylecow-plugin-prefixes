module.exports = function (stylecow) {
	
	//Adds -moz- vendor prefix

	stylecow.addTask({
		disable: {
			firefox: 3.0
		},
		Declaration: {
			display: function (declaration) {
				if (declaration.has({
					type: 'Keyword',
					name: 'inline-block'
				})) {
					declaration.cloneBefore().searchFirst({
						type: 'Keyword',
						name: 'inline-block'
					}).name = '-moz-inline-block';
				}
			}
		}
	});
};
