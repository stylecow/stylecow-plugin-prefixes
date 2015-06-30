//Check the caniuse database to discover new css features
var fs = require('fs');
var caniuse = require(__dirname + '/../caniuse');
var features = fs.readdirSync(__dirname + '/../node_modules/caniuse-db/features-json');

var implemented = [
	'background-img-opts',
	'border-image',
	'border-radius',
	'calc',
	'css-animation',
	'css-appearance',
	'css-boxdecorationbreak',
	'css-boxshadow',
	'css-canvas', //not implemented
	'css-clip-path',
	'css-crisp-edges',
	'css-deviceadaptation',
	'css-exclusions',
	'css-filters',
	'css-gradients',
	'css-grid',
	'css-hyphens',
	'css-image-set',
	'css-logical-props',
	'css-masks',
	'css-media-resolution', //implemented in stylecow-plugin-fixes
	'css-placeholder',
	'css-reflections', //not implemented
	'css-regions',
	'css-repeating-gradients',
	'css-resize',
	'css-selection',
	'css-shapes',
	'css-snappoints',
	'css-sticky',
	'css-text-align-last',
	'css-touch-action',
	'css-transitions',
	'css3-boxsizing',
	'css3-cursors-newer',
	'css3-tabsize',
	'flexbox',
	'font-feature',
	'font-kerning',
	'font-smooth', //not implemented
	'inline-block',
	'intrinsic-width',
	'multicolumn',
	'object-fit',
	'text-decoration',
	'text-emphasis',
	'text-overflow',
	'text-size-adjust',
	'text-stroke', //not implemented
	'transforms2d',
	'transforms3d',
	'user-select-none'
];

features.forEach(function (featName) {
	featName = featName.replace('.json', '');

	if (implemented.indexOf(featName) !== -1) {
		return;
	}

	var categories = caniuse.read(featName).categories;

	if (
		   categories.indexOf('CSS') === -1
		&& categories.indexOf('CSS2') === -1
		&& categories.indexOf('CSS3') === -1
	) {
		return;
	}

	var support = caniuse.getTaskInfo(featName);

	if (support.length) {
		console.log('---');
		console.log(featName);
		console.log(support);
	}
});
