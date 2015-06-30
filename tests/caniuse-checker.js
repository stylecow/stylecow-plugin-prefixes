//Check the caniuse database to discover new css features
var fs = require('fs');
var caniuse = require(__dirname + '/../caniuse');
var featuresDir = __dirname + '/../node_modules/caniuse-db/features-json';
var notImplemented = [
	'css-canvas',
	'css-media-resolution', //implemented in stylecow-plugin-fixes
	'css-reflections',
	'font-smooth',
	'text-stroke',
];

fs.readdirSync(featuresDir).forEach(function (featName) {
	var featData = require(featuresDir + '/' + featName);
	featName = featName.replace('.json', '');

	// is in not-implemented list?
	if (notImplemented.indexOf(featName) !== -1) {
		return;
	}

	// is not about css
	if (
		   featData.categories.indexOf('CSS') === -1
		&& featData.categories.indexOf('CSS2') === -1
		&& featData.categories.indexOf('CSS3') === -1
	) {
		return;
	}

	// is implemented already
	if (caniuse.data[featName]) {
		return;
	}

	var support = caniuse.getTaskInfo(featData);

	//need support?
	if (support.length) {
		console.log('---');
		console.log(featName);
		console.log(support);
	}
});
