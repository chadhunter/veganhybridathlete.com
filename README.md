## Vegan Hybrid Athlete

[![Build Status](https://github.com/chadhunter/veganhybridathlete.com/actions/workflows/jekyll_build.yml/badge.svg)](https://github.com/jekyllt/jasper2/actions/workflows/jekyll_build.yml)
[![Ruby](https://img.shields.io/badge/ruby-2.6.3-blue.svg?style=flat)](http://travis-ci.org/jekyllt/jasper2)
[![Jekyll](https://img.shields.io/badge/jekyll-3.9.0-blue.svg?style=flat)](http://travis-ci.org/jekyllt/jasper2)

## Getting Started

### Deployment

This site is build with [GitHub Actions](https://github.com/features/actions) which pushes 
the resulting files (the contents of `_site/`) 
to the *gh-pages* branch. See 
[jekyll_build.yml](.github/workflows/jekyll_build.yml) for more details.

### Author Pages

In order to properly generate author pages you need to rename the field *author* in the
front matter of every post to match that of your each author's *username* as defined
in the *[\_data/authors.yml](_data/authors.yml)* file. Multiple author blogs are supported.

### Compiling Styles

Following on the way Casper styles are compiled as [described here](https://github.com/tryghost/casper#development):

Jasper2 styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need Node and Gulp installed globally. After that, from the theme's root directory:

```bash
$ npm run gulp
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

## Copyright & License

Copyright (C) 2015-2025 - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
