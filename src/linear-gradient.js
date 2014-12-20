module.exports = function (stylecow) {

	stylecow.addTask([

		// adds -moz- vendor prefix
		{
			disable: {
				firefox: 10.0
			},
			"Function": {
				'linear-gradient': function (fn) {
					fn.parent({type: 'Declaration'}).cloneBefore().search({type: 'Function', name: 'linear-gradient'}).forEach(function (fn) {
						fn.name = '-moz-linear-gradient';
						fixDirection(fn[0]);
					});
				}
			}
		},

		// adds -o- vendor prefix
		{
			disable: {
				opera: 12.1
			},
			"Function": {
				'linear-gradient': function (fn) {
					fn.parent({type: 'Declaration'}).cloneBefore().search({type: 'Function', name: 'linear-gradient'}).forEach(function (fn) {
						fn.name = '-o-linear-gradient';
						fixDirection(fn[0]);
					});
				}
			}
		},

		// adds -webkit- vendor prefix
		{
			disable: {
				chrome: 26.0,
				safari: 6.1,
				ios: 7.0,
				android: 4.4
			},
			"Function": {
				'linear-gradient': function (fn) {
					fn.parent({type: 'Declaration'}).cloneBefore().search({type: 'Function', name: 'linear-gradient'}).forEach(function (fn) {
						fn.name = '-webkit-linear-gradient';
						fixDirection(fn[0]);
					});
				}
			}
		},

		// adds the old syntax -webkit-gradient
		{
			disable: {
				chrome: 10.0,
				safari: 5.1,
				android: 4.0
			},
			"Function": {
				'linear-gradient': function (fn) {
					fn.parent({type: 'Declaration'}).cloneBefore().search({type: 'Function', name: 'linear-gradient'}).forEach(function (fn) {
						var args = fn.toArray();
						var newArgs = ['linear'];

						//Calculate the gradient direction
						var point = 'to bottom';

						if (/(top|bottom|left|right|deg)/.test(args[0])) {
							point = args.shift();
						}

						switch (point) {
							case 'to bottom':
								newArgs.push('left top', 'left bottom');
								break;

							case 'to top':
								newArgs.push('left bottom', 'left top');
								break;

							case 'to right':
								newArgs.push('left top', 'right top');
								break;

							case 'to left':
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
						fn.replaceWith(stylecow.Function.createFromString('-webkit-gradient(' + newArgs.join(',') + ')'));
					});
				}
			}
		}
	]);
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
