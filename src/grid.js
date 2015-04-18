module.exports = function (stylecow) {
	
	//Adds -ms- vendor prefix
	stylecow.forBrowsersLowerThan({
		explorer: false
	}, function () {

		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: 'display'
			},
			fn: function (declaration) {
				if (declaration.has({
					type: 'Keyword',
					name: 'grid'
				})) {
					declaration
						.cloneBefore()
						.get({
							type: 'Keyword',
							name: 'grid'
						})
						.setVendor('ms');
				}
			}
		});

		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: /^grid.*$/
			},
			fn: function (declaration) {
				declaration
					.cloneBefore()
					.setVendor('ms');
			}
		});
	});
};
