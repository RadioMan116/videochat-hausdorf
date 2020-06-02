#!/usr/bin/env bash

JS_FILES=(dist/index.*.js)
cp "${JS_FILES[0]}" dist/index.latest.js

CSS_FILES=(dist/index.*.css)
cp "${CSS_FILES[0]}" dist/index.latest.css
