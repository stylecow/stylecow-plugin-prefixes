module.exports = function (stylecow) {

	//Adds -moz- vendor prefixes
	stylecow.forBrowsersLowerThan({
		firefox: 16.0
	}, function () {
		
		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: /^animation/
			},
			fn: function (declaration) {
				declaration
					.cloneBefore()
					.setVendor('moz');
			}
		});

		stylecow.addTask({
			filter: {
				type: 'AtRule',
				name: 'keyframes'
			},
			fn: function (atrule) {
				atrule
					.cloneBefore()
					.setVendor('moz')
					.normalizeVendors();
			}
		});
	});


	//Adds -o- vendor prefixes
	stylecow.forBrowsersLowerThan({
		opera: 12.1
	}, function () {

		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: /^animation/
			},
			fn: function (declaration) {
				declaration
					.cloneBefore()
					.setVendor('o');
			}
		});

		stylecow.addTask({
			filter: {
				type: 'AtRule',
				name: 'keyframes'
			},
			fn: function (atrule) {
				atrule
					.cloneBefore()
					.setVendor('o')
					.normalizeVendors();
			}
		});
	});


	//Adds -webkit- vendor prefixes
	stylecow.forBrowsersLowerThan({
		chrome: false,
		safari: false,
		android: false,
		ios: false
	}, function () {

		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: /^animation/
			},
			fn: function (declaration) {
				declaration
					.cloneBefore()
					.setVendor('webkit');
			}
		});

		stylecow.addTask({
			filter: {
				type: 'AtRule',
				name: 'keyframes'
			},
			fn: function (atrule) {
				atrule
					.cloneBefore()
					.setVendor('webkit')
					.normalizeVendors();
			}
		});
	});
};
