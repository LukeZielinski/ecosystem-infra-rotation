# Ecosystem Infra Rotation

This is a tool for the [ecosystem infra](https://bit.ly/ecosystem-infra) rotation.

Usage: visit [the tool](https://foolip.github.io/ecosystem-infra-rotation/) and make all the circles green.

The [old rotation doc](https://bit.ly/ecosystem-infra-rotation) still has some useful information for how to deal with problems that come up.

## Server setup

Some of the status checks depend on a cron job running frequently on a server.
This is currently run by foolip, but if broken can be set up elsewhere.

First, a `monorail-key.json` file must be placed in a checkout of this repo.
You can create a new API key and download a JSON file from the [ecosystem-infra GCP project](https://console.cloud.google.com/iam-admin/serviceaccounts/project?project=ecosystem-infra).
If you don't have access and think you should, ask foolip or robertma.
See the [Monorail API access](https://bugs.chromium.org/p/monorail/issues/detail?id=3234) request for more details/clues about how this works.

With the API key in place, either set up a cron job or just run the following:
```bash
while true; do
    git pull && ./build.sh && ./deploy.sh
    sleep 2m
done
```
