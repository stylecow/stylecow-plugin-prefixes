module.exports = function (stylecow) {
	
	//Adds -o- vendor prefix

	stylecow.addTask({
		disable: {
			opera: 15.0
		},
		Declaration: {
			"object-fit": function (declaration) {
				declaration.cloneBefore().name = '-o-object-fit';
			},
			"object-position": function (declaration) {
				declaration.cloneBefore().name = '-o-object-position';
			}
		}
	});
};
