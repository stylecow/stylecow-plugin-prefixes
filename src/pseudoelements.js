module.exports = function (stylecow) {
	stylecow.addTask([
		// Add -moz- vendor prefix in ::input-placeholder for Firefox > 18 and ::selection
		{
			disable: {
				firefox: false
			},
			RuleBefore: function (rule) {
				if (rule.has('Keyword', ['::input-placeholder', '::selection'])) {
					var clone = rule.cloneBefore();

					clone.search('Keyword', ['::input-placeholder', '::selection']).forEach(function (keyword) {
						keyword.name = (keyword.name === '::input-placeholder') ? '::-moz-placeholder' : '::-moz-selection';
					});
				}
			}
		},

		// Add -webkit- vendor prefix in ::input-placeholder
		{
			disable: {
				chrome: false,
				safari: false,
				android: false,
				ios: false
			},
			RuleBefore: function (rule) {
				if (rule.has('Keyword', '::input-placeholder')) {
					rule.cloneBefore().search('Keyword', '::input-placeholder').forEach(function (keyword) {
						keyword.name = '::-webkit-input-placeholder';
					});
				}
			}
		},

		// Add -ms- vendor prefix in ::input-placeholder
		{
			disable: {
				explorer: false
			},
			RuleBefore: function (rule) {
				if (rule.has('Keyword', '::input-placeholder')) {
					rule.cloneBefore().search('Keyword', '::input-placeholder').forEach(function (keyword) {
						keyword.name = ':-ms-input-placeholder';
					});
				}
			}
		}
	]);
};
