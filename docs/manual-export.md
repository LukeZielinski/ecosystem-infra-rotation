When [wpt-exporter](https://ci.chromium.org/buildbot/chromium.infra.cron/wpt-exporter/) has failed with "The following commit did not apply cleanly", it may be necessary to manually export the commit to GitHub:

```bash
# show the list of affected files
cd path/to/chromium/src
git diff-tree --no-commit-id --name-only -r $COMMIT -- third_party/WebKit/LayoutTests/external/wpt | grep -vE '(-expected\.txt|/OWNERS)$' | xargs echo
# create the patch
git format-patch -1 $COMMIT --stdout -- [list of affected files] > ~/wpt.patch
# apply the patch to wpt
cd path/to/web-platform-tests
git am --3way -p6 ~/wpt.patch
# if there are conflicts, resolve them before continuing
git am --continue
# finally, create a GitHub PR, get it reviewed and merged
```
