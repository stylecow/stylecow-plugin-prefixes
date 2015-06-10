module.exports = function (stylecow) {

	// Adds -webkit- vendor prefix
	stylecow.forBrowsersLowerThan({
		chrome: false,
		safari: false,
		android: false,
		ios: false
	}, function () {
		
		stylecow.addTask({
			filter: {
				type: 'Declaration',
				vendor: false,
				name: 'region-fragment'
			},
			fn: function (declaration) {
				declaration
					.cloneBefore()
					.setVendor('webkit');
			}
		});

		stylecow.addTask({
			filter: {
				type: 'Declaration',
				vendor: false,
				name: /^flow/
			},
			fn: function (declaration) {
				declaration
					.cloneBefore()
					.setVendor('webkit');
			}
		});
	});


	// Adds -ms- vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: false
		},
		filter: {
			type: 'Declaration',
			name: /^flow/
		},
		fn: function (declaration) {
			declaration
				.cloneBefore()
				.setVendor('ms');
		}
	});
};
