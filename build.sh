#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

# put the output in a directory to match how it will be served:
# https://foolip.github.io/ecosystem-infra-rotation/
OUTDIR="out/ecosystem-infra-rotation"
rm -rf out
mkdir out

# copy the static webapp content
cp -r webapp "$OUTDIR"

# generate or copy the crbug list
MONORAIL_KEY="monorail-key.json"
if [[ -f "$MONORAIL_KEY" ]]; then
    python3 monorail.py "$MONORAIL_KEY" "$OUTDIR/crbug.json"
else
    echo "No monorail API key ($MONORAIL_KEY), using the latest deployed copy"
    git fetch -q origin gh-pages
    git show FETCH_HEAD:crbug.json > "$OUTDIR/crbug.json"
fi
