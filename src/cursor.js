module.exports = function (stylecow) {
	
	//Adds -moz- vendor prefix to cursor: zoom-in / zoom-out
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 24.0
		},
		filter: {
			type: 'Declaration',
			name: 'cursor'
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Keyword',
				name: ['zoom-in', 'zoom-out']
			})) {
				declaration
					.cloneBefore()
					.search({
						type: 'Keyword',
						name: ['zoom-in', 'zoom-out']
					})
					.forEach(function (keyword) {
						keyword.name = '-moz-' + keyword.name;
					});
			}
		}
	});


	//Adds -moz- vendor prefix to cursor: grab / grabbing
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: 27.0
		},
		filter: {
			type: 'Declaration',
			name: 'cursor'
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Keyword',
				name: ['grab', 'grabbing']
			})) {
				declaration
					.cloneBefore()
					.search({
						type: 'Keyword',
						name: ['grab', 'grabbing']
					})
					.forEach(function (keyword) {
						keyword.name = '-moz-' + keyword.name;
					});
			}
		}
	});


	//Adds -webkit- vendor prefix to some cursor values
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			name: 'cursor'
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Keyword',
				name: ['zoom-in', 'zoom-out', 'grab', 'grabbing']
			})) {
				declaration
					.cloneBefore()
					.search({
						type: 'Keyword',
						name: ['zoom-in', 'zoom-out', 'grab', 'grabbing']
					})
					.forEach(function (keyword) {
						keyword.name = '-webkit-' + keyword.name;
					});
			}
		}
	});
};
