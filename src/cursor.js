module.exports = function (stylecow) {
	stylecow.addTask([
		//Adds -moz- vendor prefix to cursor: zoom-in / zoom-out
		{
			disable: {
				firefox: 24.0
			},
			Declaration: {
				'cursor': function (declaration) {
					if (declaration.has('Keyword', ['zoom-in', 'zoom-out'])) {
						declaration.cloneBefore().search('Keyword', ['zoom-in', 'zoom-out']).forEach(function (keyword) {
							keyword.name = '-moz-' + keyword;
						});
					}
				}
			}
		},

		//Adds -moz- vendor prefix to cursor: grab / grabbing
		{
			disable: {
				firefox: 27.0
			},
			Declaration: {
				'cursor': function (declaration) {
					if (declaration.has('Keyword', ['grab', 'grabbing'])) {
						declaration.cloneBefore().search('Keyword', ['grab', 'grabbing']).forEach(function (keyword) {
							keyword.name = '-moz-' + keyword;
						});
					}
				}
			}
		},

		//Adds -webkit- vendor prefix to some cursor values
		{
			disable: {
				chrome: false,
				safari: false,
				android: false,
				ios: false
			},
			Declaration: {
				'cursor': function (declaration) {
					if (declaration.has('Keyword', ['zoom-in', 'zoom-out', 'grab', 'grabbing'])) {
						declaration.cloneBefore().search('Keyword', ['zoom-in', 'zoom-out', 'grab', 'grabbing']).forEach(function (keyword) {
							keyword.name = '-webkit-' + keyword;
						});
					}
				}
			}
		}
	]);
};
