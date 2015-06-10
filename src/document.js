module.exports = function (stylecow) {
	
	//Adds -moz- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: false
		},
		filter: {
			type: 'AtRule',
			vendor: false,
			name: 'document'
		},
		fn: function (atrule) {
			atrule
				.cloneBefore()
				.setVendor('moz')
				.normalizeVendors();
		}
	});
};
