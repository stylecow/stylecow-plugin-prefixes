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
				name: 'region-fragment'
			},
			fn: function (declaration) {
				declaration.cloneBefore().name = '-webkit-region-fragment';
			}
		});

		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: /^flow/
			},
			fn: function (declaration) {
				declaration.cloneBefore().name = '-webkit-region-fragment';
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
			declaration.cloneBefore().name = '-ms-' + declaration.name;
		}
	});
};
