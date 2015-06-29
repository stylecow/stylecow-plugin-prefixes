var caniuse = require('./caniuse');

module.exports = function (stylecow) {

	caniuse.forEachVendor('css-transitions', function (task) {
		stylecow.addTask({
			forBrowsersLowerThan: task.browsers,
			filter: {
				type: 'Declaration',
				vendor: false,
				name: /^transition/
			},
			fn: function (declaration) {
				declaration
					.cloneBefore()
					.setVendor(task.vendor)
					.getAll({
						type: 'Keyword',
						name: ['transform', 'transform-origin']
					})
					.forEach(function (keyword) {
						keyword.setVendor(task.vendor);
					});
			}
		});
	});

	// Adds -ms- vendor prefix to transition-property: transform|transform-origin
	stylecow.addTask({
		forBrowsersLowerThan: caniuse.getVendorMinSupport('transforms2d', 'ms'),
		filter: {
			type: 'Declaration',
			vendor: false,
			name: ['transition', 'transition-property']
		},
		fn: function (declaration) {
			if (declaration.has({
					type: 'Keyword',
					name: ['transform', 'transform-origin']
			})) {
				declaration
					.cloneBefore()
					.getAll({
						type: 'Keyword',
						name: ['transform', 'transform-origin']
					})
					.forEach(function (keyword) {
						keyword.setVendor('ms');
					});
			}
		}
	});
};
