"use strict";

var features = new Map();

[
    'background-img-opts',
    'border-image',
    'border-radius',
    'calc',
    'css-animation',
    'css-any-link',
    'css-appearance',
    'css-backdrop-filter',
    'css-boxdecorationbreak',
    'css-boxshadow',
    'css-cross-fade',
    'css-clip-path',
    'css-crisp-edges',
    'css-deviceadaptation',
    'css-dir-pseudo',
    'css-exclusions',
    'css-element-function',
    'css-filters',
    'css-filter-function',
    'css-gradients',
    'css-hyphens',
    'css-image-set',
    'css-initial-letter',
    'css-line-clamp',
    'css-logical-props',
    'css-masks',
    'css-placeholder',
    'css-read-only-write',
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
    'css-text-spacing',
    'css-writing-mode',
    'css3-boxsizing',
    'css3-cursors-newer',
    'css3-cursors-grab',
    'css3-tabsize',
    'flexbox',
    'font-feature',
    'font-kerning',
    'fullscreen',
    'inline-block',
    'intrinsic-width',
    'multicolumn',
    'object-fit',
    'text-decoration',
    'text-emphasis',
    'text-overflow',
    'text-size-adjust',
    'transforms2d',
    'transforms3d',
    'user-select-none'
].forEach(function (key) {
    features.set(key, require('caniuse-db/features-json/' + key + '.json'));
});

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

module.exports = {
    data: features,
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
    getVendorMinSupport: function (featName, vendor, strict) {
        var taskInfo = getTaskInfo(featName, strict).filter(function (task) {
            return task.vendor === vendor;
        }).pop();

        if (taskInfo) {
            return taskInfo.browsers;
        }
    }
};

function getTaskInfo (featName, strict) {
    var data;

    if (typeof featName === 'string') {
        data = features.get(featName);

        if (!data) {
            throw new Error('"' + featName + '" is not valid');
        }
    } else {
        data = featName;
    }

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
