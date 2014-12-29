module.exports = function (stylecow) {

	// Add -moz- vendor prefix in ::input-placeholder and ::selection for Firefox > 18
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: false
		},
		filter: {
			type: 'Rule'
		},
		fn: function (rule) {
			if (
				rule
				.children('Selectors')
				.has({
					type: 'Keyword',
					name: ['::input-placeholder', '::selection']
				})
			) {
				rule
					.cloneBefore()
					.cleanVendorElements('-moz-')
					.children('Selectors')
					.search({
						type: 'Keyword',
						name: ['::input-placeholder', '::selection']
					})
					.forEach(function (keyword) {
						keyword.name = (keyword.name === '::input-placeholder') ? '::-moz-placeholder' : '::-moz-selection';
					});
			}
		}
	});


	// Add -webkit- vendor prefix in ::input-placeholder
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
			if (
				rule
				.children('Selectors')
				.has({
					type: 'Keyword',
					name: '::input-placeholder'
				})
			) {
				rule
					.cloneBefore()
					.cleanVendorElements('-webkit-')
					.children('Selectors')
					.search({
						type: 'Keyword',
						name: '::input-placeholder'
					})
					.forEach(function (keyword) {
						keyword.name = '::-webkit-input-placeholder';
					});
			}
		}
	});


	// Add -ms- vendor prefix in ::input-placeholder
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: false
		},
		filter: {
			type: 'rule'
		},
		fn: function (rule) {
			if (
				rule
				.children('Selectors')
				.has({
					type: 'Keyword',
					name: '::input-placeholder'
				})
			) {
				rule
					.cloneBefore()
					.cleanVendorElements('-ms-')
					.children('Selectors')
					.search({
						type: 'Keyword',
						name: '::input-placeholder'
					})
					.forEach(function (keyword) {
						keyword.name = '::-ms-input-placeholder';
					});
			}
		}
	});
};
