#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

COMMIT="$(git rev-parse HEAD)"
echo "Deploying from $COMMIT"

if [[ ! -d gh-pages ]]; then
    git clone --branch gh-pages git@github.com:foolip/ecosystem-infra-rotation.git gh-pages
else
    cd gh-pages
    git pull -q
    cd ..
fi

rm -rf gh-pages/*
cp -r out/ecosystem-infra-rotation/* gh-pages/

cd gh-pages
git config user.email "bot@foolip.org"
git config user.name "Automat af Ekosystem"
git add -A
git commit -m "Automatic update" -m "Using commit $COMMIT"
git push
