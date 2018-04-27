#!/bin/bash
set -o errexit
set -o nounset
set -o pipefail

# put the output in a directory to match how it will be served:
# https://foolip.github.io/ecosystem-infra-rotation/
OUTDIR="out/ecosystem-infra-rotation"
rm -rf out
mkdir out

# Copy the static webapp content. Exclude Markdown as the gh-pages build can
# fail because of them.
rsync -a --exclude="*.md" webapp/ "$OUTDIR"

# virtualenv initialization
if [[ ! -f "env/bin/activate" ]]; then
    virtualenv -p python3 --no-site-packages env
fi
set +u
source env/bin/activate
set -u
pip install -U -r requirements.txt

# generate or copy the crbug list
MONORAIL_KEY="monorail-key.json"
if [[ -f "$MONORAIL_KEY" ]]; then
    python3 monorail.py "$MONORAIL_KEY" "$OUTDIR/crbug.json"
else
    echo "No monorail API key ($MONORAIL_KEY), using the latest deployed copy"
    git fetch -q origin gh-pages
    git show FETCH_HEAD:crbug.json > "$OUTDIR/crbug.json"
fi

python3 wptsync.py "$OUTDIR/import.json" "$OUTDIR/export.json"
