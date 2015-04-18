module.exports = function (stylecow) {

	// Add -moz- vendor prefix in ::input-placeholder and ::selection for Firefox > 18
	stylecow.addTask({
		forBrowsersLowerThan: {
			firefox: false
		},
		filter: {
			type: 'Rule'
		},
		fn: function (rule) {
			if (
				rule
				.getChild('Selectors')
				.has({
					type: 'PseudoElement',
					name: ['input-placeholder', 'selection']
				})
			) {
				var clone = rule.cloneBefore();
				
				clone
					.getChild('Selectors')
					.getAll({
						type: 'PseudoElement',
						name: ['input-placeholder', 'selection']
					})
					.forEach(function (pseudoElement) {
						if (pseudoElement.name === 'input-placeholder') {
							pseudoElement.name = 'placeholder';
						}

						pseudoElement.setVendor('moz');
					});

				clone.normalizeVendors();
			}
		}
	});


	// Add -webkit- vendor prefix in ::input-placeholder
	stylecow.addTask({
		forBrowsersLowerThan: {
			chrome: false,
			safari: false,
			android: false,
			ios: false
		},
		filter: {
			type: 'Rule'
		},
		fn: function (rule) {
			if (
				rule
				.getChild('Selectors')
				.has({
					type: 'PseudoElement',
					name: 'input-placeholder'
				})
			) {
				rule
					.cloneBefore()
					.getChild('Selectors')
					.getAll({
						type: 'PseudoElement',
						name: 'input-placeholder'
					})
					.forEach(function (pseudoElement) {
						pseudoElement.setVendor('webkit');
					});
			}
		}
	});


	// Add -ms- vendor prefix in ::input-placeholder
	stylecow.addTask({
		forBrowsersLowerThan: {
			explorer: false
		},
		filter: {
			type: 'Rule'
		},
		fn: function (rule) {
			if (
				rule
				.getChild('Selectors')
				.has({
					type: 'PseudoElement',
					name: 'input-placeholder'
				})
			) {
				rule
					.cloneBefore()
					.getChild('Selectors')
					.getAll({
						type: 'PseudoElement',
						name: 'input-placeholder'
					})
					.forEach(function (pseudoElement) {
						pseudoElement.setVendor('ms');
					});
			}
		}
	});
};
