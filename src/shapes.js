module.exports = function (stylecow) {

	// adds -webkit- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			safari: false,
			ios: false
		},
		filter: {
			type: 'Declaration',
			name: ['shape-outside', 'shape-image-threshold', 'shape-margin']
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('webkit');
		}
	});
};
