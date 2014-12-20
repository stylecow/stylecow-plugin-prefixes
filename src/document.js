module.exports = function (stylecow) {
	
	//Adds -moz- vendor prefix

	stylecow.addTask({
		disable: {
			firefox: false
		},
		AtRule: {
			"document": function (atrule) {
				atrule.cloneBefore().name = '-moz-document';
			}
		}
	});
};
