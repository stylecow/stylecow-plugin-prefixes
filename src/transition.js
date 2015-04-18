module.exports = function (stylecow) {

	// Adds -moz- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 16.0
		},
		filter: {
			type: 'Declaration',
			name: /^transition/
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('moz')
				.getAll({
					type: 'Keyword',
					name: ['transform', 'transform-origin']
				})
				.forEach(function (keyword) {
					keyword.setVendor('moz');
				});
		}
	});


	// Adds -o- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			opera: 12.1
		},
		filter: {
			type: 'Declaration',
			name: /^transition/
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('o')
				.getAll({
					type: 'Keyword',
					name: ['transform', 'transform-origin']
				})
				.forEach(function (keyword) {
					keyword.setVendor('o');
				});
		}
	});


	// Adds -webkit- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: 26.0,
			safari: 6.1,
			android: 4.4
		},
		filter: {
			type: 'Declaration',
			name: /^transition/
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('webkit')
				.getAll({
					type: 'Keyword',
					name: ['transform', 'transform-origin']
				})
				.forEach(function (keyword) {
					keyword.setVendor('webkit');
				});
		}
	});


	// Adds -ms- vendor prefix to transition-property: transform|transform-origin
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: 10.0
		},
		filter: {
			type: 'Declaration',
			name: ['transition', 'transition-property']
		},
		fn: function (declaration) {
			if (declaration.has({
					type: 'Keyword',
					name: ['transform', 'transform-origin']
			})) {
				declaration
					.cloneBefore()
					.getAll({
						type: 'Keyword',
						name: ['transform', 'transform-origin']
					})
					.forEach(function (keyword) {
						keyword.setVendor('ms');
					});
			}
		}
	});
};
