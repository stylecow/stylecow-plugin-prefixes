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
				type: 'Keyword',
				name: ':fullscreen'
			})) {
				rule
					.cloneBefore()
					.cleanVendorElements('-moz-')
					.search({
						type: 'Keyword',
						name: ':fullscreen'
					})
					.forEach(function (keyword) {
						keyword.name = ':-moz-full-screen';
					});
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
				type: 'Keyword',
				name: ':fullscreen'
			})) {
				rule
					.cloneBefore()
					.cleanVendorElements('-webkit-')
					.search({
						type: 'Keyword',
						name: ':fullscreen'
					})
					.forEach(function (keyword) {
						keyword.name = ':-webkit-full-screen';
					});
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
				type: 'Keyword',
				name: ':fullscreen'
			})) {
				rule
					.cloneBefore()
					.cleanVendorElements('-ms-')
					.search({
						type: 'Keyword',
						name: ':fullscreen'
					})
					.forEach(function (keyword) {
						keyword.name = ':-ms-fullscreen';
					});
			}
		}
	});
};
