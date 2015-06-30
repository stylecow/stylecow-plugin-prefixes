module.exports = {
	forEachVendor: function (featName, strict, callback) {
		var callbackArgs = Array.prototype.slice.call(arguments);
		callbackArgs.shift();

		if (typeof strict === 'boolean') {
			callbackArgs.shift();
		} else {
			strict = false;
		}

		callback = callbackArgs[0];

		getTaskInfo(featName, strict).forEach(function (taskInfo) {
			callbackArgs[0] = taskInfo;
			callback.apply(null, callbackArgs);
		});
	},
	getTaskInfo: getTaskInfo,
	read: read,
	getVendorMinSupport: function (featName, vendor, strict) {
		var taskInfo = getTaskInfo(featName, strict).filter(function (task) {
			return task.vendor === vendor;
		}).pop();

		if (taskInfo) {
			return taskInfo.browsers;
		}
	}
};

var browsers = {
	ie: 'explorer',
	firefox: 'firefox',
	chrome: 'chrome',
	safari: 'safari',
	opera: 'opera',
	ios_saf: 'ios',
	android: 'android'
};

var vendors = [
	['ms', ['ie']],
	['moz', ['firefox']],
	['webkit', ['chrome', 'safari', 'opera', 'ios_saf', 'android']],
	['o', ['opera']]
];

function getTaskInfo (featName, strict) {
	var data = read(featName);

	return vendors
		.map(function (vendor) {
			return {
				vendor: vendor[0],
				browsers: vendor[1]
					.map(function (browser) {
						var s = getMinSupportFromStat(data.stats[browser], browser, vendor[0], strict);

						if (browser === 'ie') {
							var m = getMinSupportFromStat(data.stats['ie_mob'], browser, vendor[0], strict);

							if (s === null || (m && m < s)) {
								s = m;
							}
						}

						return (s === null) ? null : [browser, s];
					})
					.filter(function (val) {
						return val !== null;
					})
			}
		})
		.map(function (stat) {
			if (stat.browsers.length) {
				var task = {
					vendor: stat.vendor,
					browsers: {}
				};

				stat.browsers.forEach(function (browser) {
					task.browsers[browsers[browser[0]]] = browser[1];
				});

				return task;
			}
		})
		.filter(function (task) {
			return task ? true : false;
		});
}

function read (featName) {
	return require('./node_modules/caniuse-db/features-json/' + featName + '.json');
}

function getMinSupportFromStat (stats, browser, vendor, strict) {
	var minVersion = null;

	Object.keys(stats)
		.map(function (val) {
			return {
				key: val,
				version: parseFloat(val.split('-')[0])
			}
		})
		.filter(function (val) {
			return !Number.isNaN(val.version);
		})
		.sort(function (a, b) {
			return a.version - b.version;
		})
		.forEach(function (version) {
			if (browser === 'opera') {
				if ((vendor === 'o' && version.version >= 15) || (vendor === 'webkit' && version.version < 15)) {
					return;
				}
			}

			if (typeof minVersion === 'number') {
				return;
			}

			var info = stats[version.key].split(' ');

			if (info[0] === 'y' || (!strict && info[0] === 'a')) {
				if (info[1] === 'x') {
					minVersion = false;
				} else if (minVersion === false) {
					minVersion = version.version;
				}
			}
		});

	return minVersion;
}
