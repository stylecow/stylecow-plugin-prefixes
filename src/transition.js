module.exports = function (stylecow) {
	stylecow.addTask([
		// Adds -moz- vendor prefix
		{
			disable: {
				firefox: 16.0
			},
			Declaration: function (declaration) {
				if (declaration.is(null, /^transition/) && !declaration.has(null, null, null, true)) {
					declaration.cloneBefore().name = '-moz-' + declaration.name;
				}
			}
		},

		// Adds -webkit- vendor prefix
		{
			disable: {
				chrome: 26.0,
				safari: 6.1,
				android: 4.4
			},
			Declaration: function (declaration) {
				if (declaration.is(null, /^transition/) && !declaration.has(null, null, null, true)) {
					declaration.cloneBefore().name = '-webkit-' + declaration.name;
				}
			}
		},

		// Adds -o- vendor prefix
		{
			disable: {
				opera: 12.1
			},
			Declaration: function (declaration) {
				if (declaration.is(null, /^transition/) && !declaration.has(null, null, null, true)) {
					declaration.cloneBefore().name = '-o-' + declaration.name;
				}
			}
		},

		// Adds -moz- vendor prefix to transition-property: transform|transform-origin
		{
			disable: {
				firefox: 16.0
			},
			Declaration: function (declaration) {
				if (declaration.is(null, ['-moz-transition', '-moz-transition-property'])) {
					declaration.search('Keyword', ['transform', 'transform-origin']).forEach(function (keyword) {
						keyword.name = '-moz-' + keyword.name;
					});
				}
			}
		},

		// Adds -webkit- vendor prefix to transition-property: transform|transform-origin
		{
			disable: {
				chrome: false,
				safari: false,
				android: false,
				ios: false
			},
			Declaration: function (declaration) {
				if (declaration.is(null, ['-webkit-transition', '-webkit-transition-property'])) {
					declaration.search('Keyword', ['transform', 'transform-origin']).forEach(function (keyword) {
						keyword.name = '-webkit-' + keyword.name;
					});
				}
			}
		},

		// Adds -o- vendor prefix to transition-property: transform|transform-origin
		{
			disable: {
				opera: 12.1
			},
			Declaration: function (declaration) {
				if (declaration.is(null, ['-o-transition', '-o-transition-property'])) {
					declaration.search('Keyword', ['transform', 'transform-origin']).forEach(function (keyword) {
						keyword.name = '-o-' + keyword.name;
					});
				}
			}
		},

		// Adds -ms- vendor prefix to transition-property: transform|transform-origin
		{
			disable: {
				explorer: 10.0
			},
			Declaration: function (declaration) {
				if (declaration.is(null, ['transition', 'transition-property']) && declaration.has('Keyword', ['transform', 'transform-origin'])) {
					declaration.cloneBefore().search('Keyword', ['transform', 'transform-origin']).forEach(function (keyword) {
						keyword.name = '-ms-' + keyword.name;
					});
				}
			}
		}
	]);
};
