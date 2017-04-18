//Check the caniuse database to discover new css features
var fs = require('fs');
var caniuse = require(__dirname + '/../caniuse');
var featuresDir = __dirname + '/../node_modules/caniuse-db/features-json';
var notImplemented = [
	'css-canvas',           //non standard
	'css-media-resolution', //implemented in stylecow-plugin-fixes
	'css-reflections',      //non standard
	'css-matches-pseudo',   //fallback in stylecow-plugin-matches
	'font-smooth',          //non standard
	'css-scrollbar',        //non standard
	'css-grid',             //hard (or impossible) to implement
	'text-stroke',          //non standard
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
	if (caniuse.data.has(featName)) {
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
