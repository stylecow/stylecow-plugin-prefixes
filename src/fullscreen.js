module.exports = function (stylecow) {

	//Adds -moz-full-screen vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: false
		},
		filter: {
			type: 'Rule'
		},
		fn: function (rule) {
			if (rule.has({
				type: 'PseudoClass',
				vendor: false,
				name: 'fullscreen'
			})) {
				var clone = rule.cloneBefore();
				
				clone
					.get({
						type: 'PseudoClass',
						name: 'fullscreen'
					})
					.setNameWithVendor('-moz-full-screen');

				clone.normalizeVendors();
			}
		}
	});


	//Adds -webkit-full-screen vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Rule'
		},
		fn: function (rule) {
			if (rule.has({
				type: 'PseudoClass',
				name: 'fullscreen'
			})) {
				var clone = rule.cloneBefore();

				clone
					.get({
						type: 'PseudoClass',
						name: 'fullscreen'
					})
					.setNameWithVendor('-webkit-full-screen');

				clone.normalizeVendors();
			}
		}
	});


	//Adds -ms-fullscreen vendor prefix
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: false
		},
		filter: {
			type: 'Rule'
		},
		fn: function (rule) {
			if (rule.has({
				type: 'PseudoClass',
				name: 'fullscreen'
			})) {
				var clone = rule.cloneBefore();

				clone
					.get({
						type: 'PseudoClass',
						name: 'fullscreen'
					})
					.setNameWithVendor('-ms-fullscreen');

				clone.normalizeVendors();
			}
		}
	});
};
