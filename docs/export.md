The [automatic export process](https://chromium.googlesource.com/chromium/src/+/master/docs/testing/web_platform_tests.md#automatic-export-process) tries to continuously export changes from [blink/web_tests/external/wpt](https://cs.chromium.org/chromium/src/third_party/blink/web_tests/external/wpt/) into [wpt](https://github.com/web-platform-tests/wpt).

If the exporter isn't running, please [file an exporter bug](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3EInfra%3EEcosystem&cc=robertma@chromium.org&summary=[WPT%20Export]).

When an export run has failed with "The following commit did not apply cleanly", it's often because the CL builds on another which hasn't yet been exported to wpt, so if there are blocked export PRs, handle those first. If a Chromium CL has been reverted but original CL hasn't been successfully exported to wpt yet, then both can be skipped by closing the original export PR and changing its description, see [example PR](https://github.com/web-platform-tests/wpt/pull/11357).

Very rarely there can also be conflicts with *upstream* changes. In this case the exporter will not be able to even create a PR, and we must manually export it:
```bash
# show the list of affected files
cd path/to/chromium/src
git diff-tree --no-commit-id --name-only -r $COMMIT -- third_party/blink/web_tests/external/wpt | grep -vE '(-expected\.txt|/OWNERS)$' | xargs echo
# create the patch
git format-patch -1 $COMMIT --stdout -- [list of affected files] > ~/wpt.patch
# apply the patch to wpt
cd path/to/web-platform-tests
git am --3way -p6 ~/wpt.patch
# if there are conflicts, resolve them before continuing
git am --continue
# finally, create a GitHub PR, get it reviewed and merged
```
