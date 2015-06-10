module.exports = function (stylecow) {
	
	//Adds -ms- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: false
		},
		filter: {
			type: 'Declaration',
			vendor: false,
			name: ['wrap-flow', 'wrap-through']
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('ms');
		}
	});
};
