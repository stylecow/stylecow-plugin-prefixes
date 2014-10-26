module.exports = function (stylecow) {

	stylecow.addTask([
		//Adds -moz-full-screen vendor prefix
		{
			disable: {
				firefox: false
			},
			Rule: function (rule) {
				if (rule.has({type: 'Keyword', name: ':fullscreen'})) {
					rule.cloneBefore().search({type: 'Keyword', name: ':fullscreen'}).forEach(function (keyword) {
						keyword.name = ':-moz-full-screen';
					});
				}
			}
		},

		//Adds -webkit-full-screen vendor prefix
		{
			disable: {
				chrome: false,
				safari: false,
				android: false,
				ios: false
			},
			Rule: function (rule) {
				if (rule.has({type: 'Keyword', name: ':fullscreen'})) {
					rule.cloneBefore().search({type: 'Keyword', name: ':fullscreen'}).forEach(function (keyword) {
						keyword.name = ':-webkit-full-screen';
					});
				}
			}
		},

		//Adds -ms-fullscreen vendor prefix
		{
			disable: {
				explorer: false
			},
			Rule: function (rule) {
				if (rule.has({type: 'Keyword', name: ':fullscreen'})) {
					rule.cloneBefore().search({type: 'Keyword', name: ':fullscreen'}).forEach(function (keyword) {
						keyword.name = ':-ms-fullscreen';
					});
				}
			}
		}
	]);
};
