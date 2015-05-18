module.exports = function (stylecow) {
	
	//Adds -webkit- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			opera: false,
			safari: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			name: ['background', 'background-image']
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Function',
				name: 'image-set'
			})) {
				declaration
					.cloneBefore()
					.getAll({
						type: 'Function',
						name: 'image-set'
					})
					.forEach(function (fn) {
						fn.setVendor('webkit');
					});
			}
		}
	});
};
