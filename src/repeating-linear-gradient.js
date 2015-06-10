module.exports = function (stylecow) {

	// adds -moz- vendor prefix
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
				vendor: false,
				name: 'repeating-linear-gradient'
			})) {
				declaration
					.cloneBefore()
					.getAll({
						type: 'Function',
						name: 'repeating-linear-gradient'
					})
					.forEach(function (fn) {
						fn.setVendor('moz');
					});
			}
		}
	});


	// adds -o- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			opera: 12.1
		},
		filter: {
			type: 'Declaration'
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Function',
				vendor: false,
				name: 'repeating-linear-gradient'
			})) {
				declaration
					.cloneBefore()
					.getAll({
						type: 'Function',
						name: 'repeating-linear-gradient'
					})
					.forEach(function (fn) {
						fn.setVendor('o');
					});
			}
		}
	});


	// adds -webkit- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: 26.0,
			safari: 6.1,
			ios: 7.0,
			android: 4.4
		},
		filter: {
			type: 'Declaration'
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Function',
				vendor: false,
				name: 'repeating-linear-gradient'
			})) {
				declaration
					.cloneBefore()
					.getAll({
						type: 'Function',
						name: 'repeating-linear-gradient'
					})
					.forEach(function (fn) {
						fn.setVendor('webkit');
					});
			}
		}
	});
};
