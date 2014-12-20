module.exports = function (stylecow) {
	stylecow.addTask([
		//Adds -moz- vendor prefix to cursor: zoom-in / zoom-out
		{
			disable: {
				firefox: 24.0
			},
			Declaration: {
				'cursor': function (declaration) {
					if (declaration.has({type: 'Keyword', name: ['zoom-in', 'zoom-out']})) {
						declaration.cloneBefore().search({type: 'Keyword', name: ['zoom-in', 'zoom-out']}).forEach(function (keyword) {
							keyword.name = '-moz-' + keyword.name;
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
					if (declaration.has({type: 'Keyword', name: ['grab', 'grabbing']})) {
						declaration.cloneBefore().search({type: 'Keyword', name: ['grab', 'grabbing']}).forEach(function (keyword) {
							keyword.name = '-moz-' + keyword.name;
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
					if (declaration.has({type: 'Keyword', name: ['zoom-in', 'zoom-out', 'grab', 'grabbing']})) {
						declaration.cloneBefore().search({type: 'Keyword', name: ['zoom-in', 'zoom-out', 'grab', 'grabbing']}).forEach(function (keyword) {
							keyword.name = '-webkit-' + keyword.name;
						});
					}
				}
			}
		}
	]);
};
