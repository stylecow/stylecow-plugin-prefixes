var caniuse = require('./caniuse');

module.exports = function (stylecow) {

	caniuse.forEachVendor('css-repeating-gradients', addGradientVendorPrefix, ['repeating-linear-gradient', 'repeating-radial-gradient']);
	caniuse.forEachVendor('css-gradients', addGradientVendorPrefix, ['linear-gradient', 'radial-gradient']);

	// adds the old syntax -webkit-gradient
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: 10.0,
			safari: 5.1,
			android: 4.0
		},
		filter: {
			type: 'Declaration'
		},
		fn: function (declaration) {
			if (declaration.has({
				type: 'Function',
				vendor: false,
				name: 'linear-gradient'
			})) {
				declaration
					.cloneBefore()
					.getAll({
						type: 'Function',
						name: 'linear-gradient'
					})
					.forEach(function (fn) {
						fixDirection(fn[0]);

						var args = fn.toArray();
						var newArgs = ['linear'];

						//Calculate the gradient direction
						var point = 'top';

						if (/(top|bottom|left|right|deg)/.test(args[0])) {
							point = args.shift();
						}

						switch (point) {
							case 'top':
								newArgs.push('left top', 'left bottom');
								break;

							case 'bottom':
								newArgs.push('left bottom', 'left top');
								break;

							case 'left':
								newArgs.push('left top', 'right top');
								break;

							case 'right':
								newArgs.push('right top', 'left top');
								break;

							default:
								if (/^\ddeg$/.test(point)) {
									newArgs.push(parseInt(point, 10) + 'deg');
								} else {
									newArgs.push('left top', 'left bottom');
								}
						}

						//Gradient colors and color stops
						var total = args.length - 1;

						args.forEach(function (param, i) {
							var text;

							if (i === 0) {
								text = 'from';
							} else if (i === total) {
								text = 'to';
							} else {
								text = 'color-stop';
							}

							newArgs.push(text + '(' + param + ')');
						});

						//Apply the changes
						fn.replaceWith(stylecow.parse('-webkit-gradient(' + newArgs.join(',') + ')', 'Function'));
					});
			}
		}
	});

	function addGradientVendorPrefix (task, name) {
		stylecow.addTask({
			forBrowsersLowerThan: task.browsers,
			filter: {
				type: 'Declaration'
			},
			fn: function (declaration) {
				if (declaration.has({
					type: 'Function',
					vendor: false,
					name: name
				})) {
					declaration
						.cloneBefore()
						.getAll({
							type: 'Function',
							name: name
						})
						.forEach(function (fn) {
							fixDirection(fn[0]);
							fn.setVendor(task.vendor);
						});
				}
			}
		});
	}
};

function fixDirection (direction) {
	if (direction[0].name === 'to') {
		direction.shift();
		var keyword = direction[0];

		switch (keyword.name) {
			case 'top':
				keyword.name = 'bottom';
				break;

			case 'bottom':
				keyword.name = 'top';
				break;

			case 'left':
				keyword.name = 'right';
				break;

			case 'right':
				keyword.name = 'left';
				break;
		}
	}
}
