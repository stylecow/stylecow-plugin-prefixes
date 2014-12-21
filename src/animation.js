module.exports = function (stylecow) {

	//Adds -moz- vendor prefixes
	stylecow.forBrowsersLowerThan({
		firefox: 16.0
	}, function () {
		
		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: /^animation/
			},
			fn: function (declaration) {
				declaration.cloneBefore().name = '-moz-' + declaration.name;
			}
		});

		stylecow.addTask({
			filter: {
				type: 'AtRule',
				name: 'keyframes'
			},
			fn: function (atrule) {
				atrule.cloneBefore().name = '-moz-' + atrule.name;
			}
		});
	});


	//Adds -o- vendor prefixes
	stylecow.forBrowsersLowerThan({
		opera: 12.1
	}, function () {

		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: /^animation/
			},
			fn: function (declaration) {
				declaration.cloneBefore().name = '-o-' + declaration.name;
			}
		});

		stylecow.addTask({
			filter: {
				type: 'AtRule',
				name: 'keyframes'
			},
			fn: function (atrule) {
				atrule.cloneBefore().name = '-o-' + atrule.name;
			}
		});
	});


	//Adds -webkit- vendor prefixes
	stylecow.forBrowsersLowerThan({
		chrome: false,
		safari: false,
		android: false,
		ios: false
	}, function () {

		stylecow.addTask({
			filter: {
				type: 'Declaration',
				name: /^animation/
			},
			fn: function (declaration) {
				declaration.cloneBefore().name = '-webkit-' + declaration.name;
			}
		});

		stylecow.addTask({
			filter: {
				type: 'AtRule',
				name: 'keyframes'
			},
			fn: function (atrule) {
				atrule.cloneBefore().name = '-webkit-' + atrule.name;
			}
		});
	});
};
