module.exports = function (stylecow) {
	
	//Adds -moz- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 3.0
		},
		filter: {
			type: 'Declaration',
			name: 'display'
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Keyword',
				name: 'inline-block'
			})) {
				declaration
					.cloneBefore()
					.searchFirst({
						type: 'Keyword',
						name: 'inline-block'
					})
					.name = '-moz-inline-block';
			}
		}
	});
};
