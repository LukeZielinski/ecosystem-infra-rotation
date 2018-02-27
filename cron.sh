#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

cd "$(dirname $0)"

COMMIT="$(git rev-parse HEAD)"

echo "Update using $COMMIT on $(date --utc)"

if [[ ! -d gh-pages ]]; then
    git clone --branch gh-pages git@github.com:foolip/ecosystem-infra-rotation.git gh-pages
else
    cd gh-pages
    git pull -q
    cd ..
fi

python3 monorail.py gh-pages/crbug.json > gh-pages/crbug.md

cd gh-pages
git config user.email "bot@foolip.org"
git config user.name "Automat af Ekosystem"
git add -A
git commit -m "Automatic update" -m "Using commit $COMMIT"
git push
