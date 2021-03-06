#!/bin/bash

# Performs a release of a new version of the site. This script will fail
# if the working directory is not clean (in git terms).
rm -rf deploy static dist

# install dependencies and run build
npm run build

mkdir deploy
cd deploy
cp -r ../dist ./static
cp -r ../public/* ./static
cp -r ../index.html .
cp -r ../error.html .
cd ..

rm -rf dist