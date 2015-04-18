module.exports = function (stylecow) {
	
	//Adds -o- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			opera: 15.0
		},
		filter: {
			type: 'Declaration',
			name: ['object-fit', 'object-position']
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('o');
		}
	});
};
