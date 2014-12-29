module.exports = function (stylecow) {

	//Mozilla
	stylecow.forBrowsersLowerThan({
		firefox: 16.0
	}, function () {

		// Adds -moz- vendor prefix
		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: /^transition/
			},
			fn: function (declaration) {
				if (!declaration.has({vendor: true})) {
					declaration.cloneBefore().name = '-moz-' + declaration.name;
				}
			}
		});

		// Adds -moz- vendor prefix to transition-property: transform|transform-origin
		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: ['-moz-transition', '-moz-transition-property']
			},
			fn: function (declaration) {
				declaration
					.search({
						type: 'Keyword',
						name: ['transform', 'transform-origin']
					})
					.forEach(function (keyword) {
						keyword.name = '-moz-' + keyword.name;
					});
			}
		});
	});


	//Opera
	stylecow.forBrowsersLowerThan({
		opera: 12.1
	}, function () {

		// Adds -o- vendor prefix
		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: /^transition/
			},
			fn: function (declaration) {
				if (!declaration.has({vendor: true})) {
					declaration.cloneBefore().name = '-o-' + declaration.name;
				}
			}
		});

		// Adds -o- vendor prefix to transition-property: transform|transform-origin
		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: ['-o-transition', '-o-transition-property']
			},
			fn: function (declaration) {
				declaration
					.search({
						type: 'Keyword',
						name: ['transform', 'transform-origin']
					})
					.forEach(function (keyword) {
						keyword.name = '-o-' + keyword.name;
					});
			}
		});
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
			if (!declaration.has({vendor: true})) {
				declaration.cloneBefore().name = '-webkit-' + declaration.name;
			}
		}
	});


	// Adds -webkit- vendor prefix to transition-property: transform|transform-origin
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			name: ['-webkit-transition', '-webkit-transition-property']
		},
		fn: function (declaration) {
			declaration
				.search({
					type: 'Keyword',
					name: ['transform', 'transform-origin']
				})
				.forEach(function (keyword) {
					keyword.name = '-webkit-' + keyword.name;
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
			name: ['-ms-transition', '-ms-transition-property']
		},
		fn: function (declaration) {
			if (declaration.has({type: 'Keyword', name: ['transform', 'transform-origin']})) {
				declaration
					.cloneBefore()
					.search({
						type: 'Keyword',
						name: ['transform', 'transform-origin']
					})
					.forEach(function (keyword) {
						keyword.name = '-ms-' + keyword.name;
					});
			}
		}
	});
};
