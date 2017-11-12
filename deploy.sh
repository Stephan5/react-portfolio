#!/bin/bash

# Performs a release of a new version of the site. This script will fail
# if the working directory is not clean (in git terms).

# install dependencies and run build
npm run build

#copy dist folder and name 'static'
cp -r dist static

mkdir deploy
cd deploy
cp -r ../static .
cp -r ../index.html .
cp -r ../error.html .
cd ..