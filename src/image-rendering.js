module.exports = function (stylecow) {
	
	//Adds -moz- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: false
		},
		filter: {
			type: 'Declaration',
			name: 'image-rendering'
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Keyword',
				name: 'crisp-edges'
			})) {
				declaration
					.cloneBefore()
					.get({
						type: 'Keyword',
						name: 'crisp-edges'
					})
					.setVendor('moz');
			}
		}
	});	

	//Adds -webkit- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			safari: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			name: 'image-rendering'
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Keyword',
				name: 'crisp-edges'
			})) {
				declaration
					.cloneBefore()
					.get({
						type: 'Keyword',
						name: 'crisp-edges'
					})
					.setVendor('webkit');
			}
		}
	});
};
