"use strict";

var features = {
    'background-img-opts': require('caniuse-db/features-json/background-img-opts.json'),
    'border-image': require('caniuse-db/features-json/border-image.json'),
    'border-radius': require('caniuse-db/features-json/border-radius.json'),
    'calc': require('caniuse-db/features-json/calc.json'),
    'css-animation': require('caniuse-db/features-json/css-animation.json'),
    'css-appearance': require('caniuse-db/features-json/css-appearance.json'),
    'css-boxdecorationbreak': require('caniuse-db/features-json/css-boxdecorationbreak.json'),
    'css-boxshadow': require('caniuse-db/features-json/css-boxshadow.json'),
    'css-clip-path': require('caniuse-db/features-json/css-clip-path.json'),
    'css-crisp-edges': require('caniuse-db/features-json/css-crisp-edges.json'),
    'css-deviceadaptation': require('caniuse-db/features-json/css-deviceadaptation.json'),
    'css-exclusions': require('caniuse-db/features-json/css-exclusions.json'),
    'css-filters': require('caniuse-db/features-json/css-filters.json'),
    'css-gradients': require('caniuse-db/features-json/css-gradients.json'),
    'css-grid': require('caniuse-db/features-json/css-grid.json'),
    'css-hyphens': require('caniuse-db/features-json/css-hyphens.json'),
    'css-image-set': require('caniuse-db/features-json/css-image-set.json'),
    'css-logical-props': require('caniuse-db/features-json/css-logical-props.json'),
    'css-masks': require('caniuse-db/features-json/css-masks.json'),
    'css-placeholder': require('caniuse-db/features-json/css-placeholder.json'),
    'css-regions': require('caniuse-db/features-json/css-regions.json'),
    'css-repeating-gradients': require('caniuse-db/features-json/css-repeating-gradients.json'),
    'css-resize': require('caniuse-db/features-json/css-resize.json'),
    'css-selection': require('caniuse-db/features-json/css-selection.json'),
    'css-shapes': require('caniuse-db/features-json/css-shapes.json'),
    'css-snappoints': require('caniuse-db/features-json/css-snappoints.json'),
    'css-sticky': require('caniuse-db/features-json/css-sticky.json'),
    'css-text-align-last': require('caniuse-db/features-json/css-text-align-last.json'),
    'css-touch-action': require('caniuse-db/features-json/css-touch-action.json'),
    'css-transitions': require('caniuse-db/features-json/css-transitions.json'),
    'css3-boxsizing': require('caniuse-db/features-json/css3-boxsizing.json'),
    'css3-cursors-newer': require('caniuse-db/features-json/css3-cursors-newer.json'),
    'css3-tabsize': require('caniuse-db/features-json/css3-tabsize.json'),
    'flexbox': require('caniuse-db/features-json/flexbox.json'),
    'font-feature': require('caniuse-db/features-json/font-feature.json'),
    'font-kerning': require('caniuse-db/features-json/font-kerning.json'),
    'fullscreen': require('caniuse-db/features-json/fullscreen.json'),
    'inline-block': require('caniuse-db/features-json/inline-block.json'),
    'intrinsic-width': require('caniuse-db/features-json/intrinsic-width.json'),
    'multicolumn': require('caniuse-db/features-json/multicolumn.json'),
    'object-fit': require('caniuse-db/features-json/object-fit.json'),
    'text-decoration': require('caniuse-db/features-json/text-decoration.json'),
    'text-emphasis': require('caniuse-db/features-json/text-emphasis.json'),
    'text-overflow': require('caniuse-db/features-json/text-overflow.json'),
    'text-size-adjust': require('caniuse-db/features-json/text-size-adjust.json'),
    'transforms2d': require('caniuse-db/features-json/transforms2d.json'),
    'transforms3d': require('caniuse-db/features-json/transforms3d.json'),
    'user-select-none': require('caniuse-db/features-json/user-select-none.json')
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
        data = features[featName];

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
