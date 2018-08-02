The [automatic import process](https://chromium.googlesource.com/chromium/src/+/master/docs/testing/web_platform_tests.md#automatic-import-process) tries to continuously import changes from [wpt](https://github.com/web-platform-tests/wpt) into [LayoutTests/external/wpt](https://cs.chromium.org/chromium/src/third_party/WebKit/LayoutTests/external/wpt/).

When the importer is persistently failing, please [file a bug](https://bugs.chromium.org/p/chromium/issues/entry?components=Blink%3EInfra%3EEcosystem&cc=robertma@chromium.org&summary=[WPT%20Import]) and add it to the
[wpt-importer failures](https://docs.google.com/spreadsheets/d/19y9DUuYspuYU_hUZ-fYc10ibTHfMyTx55HLZfuwSNDQ/edit?usp=sharing).

If the import is failing due to specific tests, work around it by adding them to [TestExpectations](https://cs.chromium.org/chromium/src/third_party/WebKit/LayoutTests/TestExpectations), and if necessary clean that up after a successful import. This is much preferable to a [manual import](https://chromium.googlesource.com/chromium/src/+/master/docs/testing/web_platform_tests.md#Manual-import) because the importer will also file bugs for regressions, which will not be filed when importing manually.

When you're on rotation, the importer will add your as a TBR reviewer for import CLs, but you don’t need to review the CLs if there’s no sign of trouble.
