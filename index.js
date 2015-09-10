"use strict";

var caniuse = require('./caniuse');

module.exports = function (tasks) {

    caniuse.forEachVendor('background-img-opts', addDeclarationVendor, ['background-size', 'background-clip', 'background-origin']);
    caniuse.forEachVendor('border-image', addDeclarationVendor, /^border-image/);
    caniuse.forEachVendor('border-radius', addDeclarationVendor, /^border-.*radius$/, {
        'moz': {
            'border-top-left-radius': '-moz-border-radius-topleft',
            'border-top-right-radius': '-moz-border-radius-topright',
            'border-bottom-left-radius': '-moz-border-radius-bottomleft',
            'border-bottom-right-radius': '-moz-border-radius-bottomright'
        }
    });

    caniuse.forEachVendor('calc', addFunctionVendor, 'calc');
    caniuse.forEachVendor('css-animation', addAtRuleVendor, 'keyframes');
    caniuse.forEachVendor('css-animation', addDeclarationVendor, /^animation/);
    caniuse.forEachVendor('css-appearance', addDeclarationVendor, 'appearance');
    caniuse.forEachVendor('css-boxdecorationbreak', addDeclarationVendor, 'box-decoration-break');
    caniuse.forEachVendor('css-boxshadow', addDeclarationVendor, 'box-shadow');
    caniuse.forEachVendor('css-clip-path', addDeclarationVendor, 'clip-path');
    caniuse.forEachVendor('css-crisp-edges', addDeclarationChildVendor, 'image-rendering', 'Keyword', 'crisp-edges');
    caniuse.forEachVendor('css-deviceadaptation', addAtRuleVendor, 'viewport');
    caniuse.forEachVendor('css-exclusions', addDeclarationVendor, ['wrap-flow', 'wrap-through']);
    caniuse.forEachVendor('css-filters', addDeclarationVendor, 'filter');
    caniuse.forEachVendor('css-gradients', addGradientVendorPrefix, ['linear-gradient', 'radial-gradient']);
    caniuse.forEachVendor('css-grid', addDeclarationChildVendor, 'display', 'Keyword', 'grid');
    caniuse.forEachVendor('css-grid', addDeclarationVendor, /^grid.*$/);
    caniuse.forEachVendor('css-hyphens', addDeclarationVendor, 'hyphens');
    caniuse.forEachVendor('css-image-set', addDeclarationChildVendor, ['background', 'background-image'], 'Function', 'image-set');
    caniuse.forEachVendor('css-logical-props', addDeclarationVendor, /^(margin|border|padding)-.*(start|end)/);
    caniuse.forEachVendor('css-masks', addDeclarationVendor, /^mask/);
    caniuse.forEachVendor('css-placeholder', addSelectorChildVendor, 'PseudoElement', 'placeholder', {
        'webkit': {
            'placeholder': '-webkit-input-placeholder'
        },
        'ms': {
            'placeholder': '-ms-input-placeholder'
        }
    });
    caniuse.forEachVendor('css-regions', addDeclarationVendor, /^flow/);
    caniuse.forEachVendor('css-regions', addDeclarationVendor, 'region-fragment');
    caniuse.forEachVendor('css-repeating-gradients', addGradientVendorPrefix, ['repeating-linear-gradient', 'repeating-radial-gradient']);
    caniuse.forEachVendor('css-resize', addDeclarationVendor, 'resize');
    caniuse.forEachVendor('css-selection', addSelectorChildVendor, 'PseudoElement', 'selection');
    caniuse.forEachVendor('css-shapes', addDeclarationVendor, ['shape-outside', 'shape-image-threshold', 'shape-margin']);
    caniuse.forEachVendor('css-snappoints', addDeclarationVendor, /^scroll-snap-.*/);
    caniuse.forEachVendor('css-sticky', addDeclarationChildVendor, 'position', 'Keyword', 'sticky');
    caniuse.forEachVendor('css-text-align-last', addDeclarationVendor, 'text-align-last');
    caniuse.forEachVendor('css-touch-action', addDeclarationVendor, 'touch-action');
    caniuse.forEachVendor('css3-boxsizing', addDeclarationVendor, 'box-sizing');
    caniuse.forEachVendor('css3-cursors-newer', addDeclarationChildVendor, 'cursor', 'Keyword', ['zoom-in', 'zoom-out', 'grab', 'grabbing']);
    caniuse.forEachVendor('css3-tabsize', addDeclarationVendor, 'tab-size');
    caniuse.forEachVendor('flexbox', true, addDeclarationChildVendor, 'display', 'Keyword', ['flex', 'inline-flex']);
    caniuse.forEachVendor('flexbox', true, addDeclarationVendor, /^(flex.*|align.*|justify-content|order)$/);
    caniuse.forEachVendor('font-feature', addDeclarationVendor, 'font-feature-settings');
    caniuse.forEachVendor('font-feature', addDeclarationVendor, ['font-variant-ligatures', 'font-variant-caps', 'font-variant-east-asian', 'font-variant-alternates', 'font-variant-numeric']);
    caniuse.forEachVendor('font-kerning', addDeclarationVendor, 'font-kerning');
    caniuse.forEachVendor('fullscreen', addSelectorChildVendor, 'PseudoClass', 'fullscreen', {
        'moz': {
            'fullscreen': '-moz-full-screen'
        },
        'webkit': {
            'fullscreen': '-webkit-full-screen'
        }
    });
    caniuse.forEachVendor('inline-block', addDeclarationChildVendor, 'display', 'Keyword', 'inline-block');
    caniuse.forEachVendor('intrinsic-width', addDeclarationChildVendor, 
        ['width', 'height', 'min-width', 'min-height', 'max-width', 'max-height'],
        'Keyword', ['fill-available', 'max-content', 'min-content', 'fit-content'], {
            'moz': {
                'fill-available': '-moz-available'
            }
        });
    caniuse.forEachVendor('multicolumn', addDeclarationVendor, /^column/);
    caniuse.forEachVendor('object-fit', addDeclarationVendor, ['object-fit', 'object-position']);
    caniuse.forEachVendor('text-decoration', addDeclarationVendor, ['text-decoration-line', 'text-decoration-color', 'text-decoration-style']);
    caniuse.forEachVendor('text-emphasis', addDeclarationVendor, ['text-emphasis', 'text-emphasis-style', 'text-emphasis-color', 'text-emphasis-position']);
    caniuse.forEachVendor('text-overflow', addDeclarationVendor, 'text-overflow');
    caniuse.forEachVendor('text-size-adjust', addDeclarationVendor, 'text-size-adjust');
    caniuse.forEachVendor('transforms2d', addDeclarationVendor, /^transform.*$/);
    caniuse.forEachVendor('transforms3d', addDeclarationVendor, /^(perspective.*|backface-visibility)$/);
    caniuse.forEachVendor('user-select-none', addDeclarationVendor, 'user-select');


    // TRANSITION (special case)

    //add vendor prefix to declaration and transition-property
    caniuse.forEachVendor('css-transitions', function (task) {
        tasks.addTask({
            forBrowsersLowerThan: task.browsers,
            filter: {
                type: 'Declaration',
                vendor: false,
                name: /^transition/
            },
            fn: function (declaration) {
                declaration
                    .cloneBefore()
                    .setVendor(task.vendor)
                    .getAll({
                        type: 'Keyword',
                        name: ['transform', 'transform-origin']
                    })
                    .forEach(keyword => keyword.setVendor(task.vendor));
            }
        });
    });

    // Adds -ms- vendor prefix to transition-property: transform|transform-origin
    tasks.addTask({
        forBrowsersLowerThan: caniuse.getVendorMinSupport('transforms2d', 'ms'),
        filter: {
            type: 'Declaration',
            vendor: false,
            name: ['transition', 'transition-property']
        },
        fn: function (declaration) {
            if (declaration.has({
                    type: 'Keyword',
                    name: ['transform', 'transform-origin']
            })) {
                declaration
                    .cloneBefore()
                    .getAll({
                        type: 'Keyword',
                        name: ['transform', 'transform-origin']
                    })
                    .forEach(keyword => keyword.setVendor('ms'));
            }
        }
    });

    //@document (Other special case not included in caniuse)

    //Adds -moz- vendor prefix
    tasks.addTask({
        forBrowsersLowerThan: {
            firefox: false
        },
        filter: {
            type: 'AtRule',
            vendor: false,
            name: 'document'
        },
        fn: function (atrule) {
            atrule
                .cloneBefore()
                .setVendor('moz')
                .normalizeVendors();
        }
    });


    // HELPERS FUNCTIONS

    function addFunctionVendor (task, name) {
        tasks.addTask({
            forBrowsersLowerThan: task.browsers,
            filter: 'Declaration',
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
                        .forEach(fn => fn.setVendor(task.vendor));
                }
            }
        });
    }

    function addDeclarationVendor (task, name, specialCases) {
        //Remove unused vendors
        tasks.addTask({
            forBrowsersUpperOrEqualTo: task.browsers,
            filter: {
                type: 'Declaration',
                vendor: task.vendor,
                name: name
            },
            position: 'before',
            fn: function (declaration) {
                declaration.detach();
            }
        });

        //Add vendors
        tasks.addTask({
            forBrowsersLowerThan: task.browsers,
            filter: {
                type: 'Declaration',
                vendor: false,
                name: name
            },
            fn: function (declaration) {
                if (!declaration.hasSibling({
                    type: 'Declaration',
                    vendor: task.vendor,
                    name: name
                })) {
                    addVendor(declaration.cloneBefore(), task.vendor, specialCases);
                }
            }
        });
    }

    function addAtRuleVendor (task, name) {
        //Remove unused vendors
        tasks.addTask({
            forBrowsersLowerThan: task.browsers,
            filter: {
                type: 'AtRule',
                vendor: task.vendor,
                name: name
            },
            position: 'before',
            fn: function (atrule) {
                atrule.cloneBefore().setVendor(task.vendor).normalizeVendors();
            }
        });

        //Add vendors
        tasks.addTask({
            forBrowsersLowerThan: task.browsers,
            filter: {
                type: 'AtRule',
                vendor: false,
                name: name
            },
            fn: function (atrule) {
                atrule.cloneBefore().setVendor(task.vendor).normalizeVendors();
            }
        });
    }

    function addDeclarationChildVendor (task, declarationName, childType, childName, specialCases) {
        tasks.addTask({
            forBrowsersLowerThan: task.browsers,
            filter: {
                type: 'Declaration',
                name: declarationName
            },
            fn: function (declaration) {
                if (declaration.has({
                    type: childType,
                    name: childName
                })) {
                    declaration
                        .cloneBefore()
                        .getAll({
                            type: childType,
                            name: childName
                        })
                        .forEach(child => addVendor(child, task.vendor, specialCases));
                }
            }
        });
    }

    function addSelectorChildVendor (task, childType, childName, specialCases) {
        tasks.addTask({
            forBrowsersLowerThan: task.browsers,
            filter: 'Rule',
            fn: function (rule) {
                if (
                    rule
                    .getChild('Selectors')
                    .has({
                        type: childType,
                        vendor: false,
                        name: childName
                    })
                ) {
                    let clone = rule.cloneBefore();
                    
                    clone
                        .getChild('Selectors')
                        .getAll({
                            type: childType,
                            name: childName
                        })
                        .forEach(child => addVendor(child, task.vendor, specialCases));

                    clone.normalizeVendors();
                }
            }
        });
    }

    function addVendor (element, vendor, specialCases) {
        if (specialCases !== undefined && specialCases.hasOwnProperty(vendor) && specialCases[vendor].hasOwnProperty(element.name)) {
            return element.setNameWithVendor(specialCases[vendor][element.name]);
        }
        
        element.setVendor(vendor);
    }

    function addGradientVendorPrefix (task, name) {
        tasks.addTask({
            forBrowsersLowerThan: task.browsers,
            filter: 'Declaration',
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
                            var direction = fn[0];

                            //fix "to x" syntax
                            if (direction[0].name === 'to') {
                                direction.shift();

                                switch (direction[0].name) {
                                    case 'top':
                                        direction[0].name = 'bottom';
                                        break;

                                    case 'bottom':
                                        direction[0].name = 'top';
                                        break;

                                    case 'left':
                                        direction[0].name = 'right';
                                        break;

                                    case 'right':
                                        direction[0].name = 'left';
                                        break;
                                }
                            }

                            fn.setVendor(task.vendor);
                        });
                }
            }
        });
    }
};
