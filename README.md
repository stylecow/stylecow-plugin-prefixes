stylecow plugin prefixes
========================

[![Build Status](https://travis-ci.org/stylecow/stylecow-plugin-prefixes.svg)](https://travis-ci.org/stylecow/stylecow-plugin-prefixes)

Stylecow plugin to add automatically all vendor prefixes needed. It uses the [caniuse](http://caniuse.com/) database to get the data about the browsers support.

You write:

```css
.foo {
    user-select: none;
    hyphens: auto;
    transition: background-color 2s;
}
```

And stylecow converts to:

```css
.foo {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    -moz-transition: background-color 2s;
    -webkit-transition: background-color 2s;
    -o-transition: background-color 2s;
    transition: background-color 2s;
}
```

More demos in [the tests folder](https://github.com/stylecow/stylecow-plugin-prefixes/tree/master/tests/cases)
