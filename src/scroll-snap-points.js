module.exports = function (stylecow) {

	// adds -ms- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: false
		},
		filter: {
			type: 'Declaration',
			name: /^scroll-snap-.*/
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('ms');
		}
	});
};
