module.exports = function (stylecow) {
	
	//Adds -ms- vendor prefix
	stylecow.forBrowsersLowerThan({
		explorer: false
	}, function () {

		stylecow.addTask({
			filter: {
				type: 'Declaration',
				string: 'display: grid;'
			},
			fn: function (declaration) {
				declaration.cloneBefore().searchFirst({
					type: 'Keyword',
					name: 'grid'
				}).name = '-ms-grid';
			}
		});

		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: /^grid.*$/
			},
			fn: function (declaration) {
				declaration.cloneBefore().name = '-ms-' + declaration.name;
			}
		});
	});
};
