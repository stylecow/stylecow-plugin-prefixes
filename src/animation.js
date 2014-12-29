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
				declaration
					.cloneBefore()
					.set('name', '-moz-' + declaration.name);
			}
		});

		stylecow.addTask({
			filter: {
				type: 'AtRule',
				name: 'keyframes'
			},
			fn: function (atrule) {
				atrule
					.cloneBefore()
					.cleanVendorElements('-moz-')
					.set('name', '-moz-' + atrule.name);
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
				declaration
					.cloneBefore()
					.set('name', '-o-' + declaration.name);
			}
		});

		stylecow.addTask({
			filter: {
				type: 'AtRule',
				name: 'keyframes'
			},
			fn: function (atrule) {
				atrule
					.cloneBefore()
					.cleanVendorElements('-o-')
					.set('name', '-o-' + atrule.name);
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
				declaration
					.cloneBefore()
					.set('name', '-webkit-' + declaration.name);
			}
		});

		stylecow.addTask({
			filter: {
				type: 'AtRule',
				name: 'keyframes'
			},
			fn: function (atrule) {
				atrule
					.cloneBefore()
					.cleanVendorElements('-webkit-')
					.set('name', '-webkit-' + atrule.name);
			}
		});
	});
};
