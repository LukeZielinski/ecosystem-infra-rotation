# Ecosystem Infra Rotation

This is a tool for the [ecosystem infra](https://bit.ly/ecosystem-infra) rotation.

## Usage

Visit https://foolip.github.io/ecosystem-infra-rotation/ and follow the instructions.

If you reload often you might hit the GitHub API limit for unauthenticated requests.
If this happens, [generate a new access token](https://github.com/settings/tokens/new) and pass it in the URL: https://foolip.github.io/ecosystem-infra-rotation/#GH_TOKEN=abcdef

## Running locally

The build script needs Bower, Python 3 and Virtualenv:
```bash
sudo npm install -g bower
sudo apt install python3 virtualenv
```

To run locally:
```bash
./build.sh && ./serve.sh
```

This will serve the tool at http://localhost:8000/ecosystem-infra-rotation/

## API key

The monorail queries require a `monorail-key.json` to be placed in a checkout of this repo.
You can create a new API key and download a JSON file from the [ecosystem-infra GCP project](https://console.cloud.google.com/iam-admin/serviceaccounts/project?project=ecosystem-infra).
If you don't have access and think you should, ask foolip or robertma.
See the [Monorail API access](https://bugs.chromium.org/p/monorail/issues/detail?id=3234) request for more details/clues about how this works.

## Server setup

https://foolip.github.io/ecosystem-infra-rotation/ depends on a cron job running `./build.sh && ./deploy.sh` to update the gh-pages branch.

This is currently run by foolip, but if broken can be set up elsewhere.

With the API key in place, either set up a cron job or just run the following:
```bash
while true; do
    git pull && ./build.sh && ./deploy.sh
    sleep 2m
done
```
