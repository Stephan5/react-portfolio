#!/bin/bash

# Performs a release of a new version of the site. This script will fail
# if the working directory is not clean (in git terms).

# install dependencies and run build
rm -rf dist
rm -rf static
yarn install
yarn build

#copy dist folder and name 'static'
cp -r dist static

mkdir prod
cd prod
cp -r ../static .
cd ..

# push to s3 some how

# cleanup
rm -rf dist/
rm -rf static/
