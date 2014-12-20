module.exports = function (stylecow) {
	
	//Adds -webkit- vendor prefix

	stylecow.addTask({
		disable: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		Declaration: {
			position: function (declaration) {
				if (declaration.has({type: 'Keyword', name: ['sticky']})) {
					declaration.cloneBefore().search({type: 'Keyword', name: ['sticky']}).forEach(function (keyword) {
						keyword.name = '-webkit-' + keyword.name;
					});
				}
			}
		}
	});
};
