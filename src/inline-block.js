module.exports = function (stylecow) {
	
	//Adds -moz- vendor prefix

	stylecow.addTask({
		disable: {
			firefox: 3.0
		},
		Declaration: {
			display: function (declaration) {
				if (declaration.is({value: 'inline-block'})) {
					declaration.insertAfter('display: -moz-inline-block');
				}
			}
		}
	});
};
