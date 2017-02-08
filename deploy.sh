#!/bin/bash

# Performs a release of a new version of the library. This script will fail
# if the working directory is not clean (in git terms).
if [ -z "$1" ]; then
   echo "You must specify a new version level: [patch, minor, major]";
   exit 1;
fi

# install dependencies and run build
yarn clean
yarn install
yarn build

#copy dist folder and name 'static'
cp -r dist static
mkdir prod-release-v$1
# bump the version

# npm version creates a version commit and tag

git push
git push --tags

# cleanup
rm -rf dist/
mkdir out

# make the docs
yarn make-docs
VERSION=`ls docs/starling-developer-sdk`
mv docs/starling-developer-sdk/* out/
rm -rf docs/

git checkout gh-pages
mv out/* docs/
echo $VERSION >> _data/versions.csv
git add .
git commit -m "Adding docs for version v$VERSION"
git push
