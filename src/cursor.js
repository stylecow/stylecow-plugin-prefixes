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
				vendor: false,
				name: ['zoom-in', 'zoom-out']
			})) {
				declaration
					.cloneBefore()
					.get({
						type: 'Keyword',
						name: ['zoom-in', 'zoom-out']
					})
					.setVendor('moz');
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
				vendor: false,
				name: ['grab', 'grabbing']
			})) {
				declaration
					.cloneBefore()
					.get({
						type: 'Keyword',
						name: ['grab', 'grabbing']
					})
					.setVendor('moz');
			}
		}
	});


	//Adds -webkit- vendor prefix to some cursor values
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: 37.0,
			opera: 24.0,
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
				vendor: false,
				name: ['zoom-in', 'zoom-out']
			})) {
				declaration
					.cloneBefore()
					.get({
						type: 'Keyword',
						name: ['zoom-in', 'zoom-out']
					})
					.setVendor('webkit');
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
				vendor: false,
				name: ['grab', 'grabbing']
			})) {
				declaration
					.cloneBefore()
					.get({
						type: 'Keyword',
						name: ['grab', 'grabbing']
					})
					.setVendor('webkit');
			}
		}
	});
};
