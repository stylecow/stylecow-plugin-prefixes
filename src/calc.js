module.exports = function (stylecow) {

	//Adds -moz- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 16.0
		},
		filter: {
			type: 'Declaration'
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Function',
				name: 'calc'
			})) {
				declaration
					.cloneBefore()
					.search({
						type: 'Function',
						name: 'calc'
					})
					.forEach(function (fn) {
						fn.name = '-moz-' + fn.name;
					});
			}
		}
	});


	//Adds -webkit- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: 26.0,
			safari: 6.1,
			ios: 7.0
		},
		filter: {
			type: 'Declaration'
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Function',
				name: 'calc'
			})) {
				declaration
					.cloneBefore()
					.search({
						type: 'Function',
						name: 'calc'
					})
					.forEach(function (fn) {
						fn.name = '-webkit-' + fn.name;
					});
			}
		}
	});
};
