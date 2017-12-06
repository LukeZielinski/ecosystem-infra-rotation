from oauth2client.client import GoogleCredentials
import googleapiclient.discovery
import os.path

CREDENTIALS_FILE = 'monorail-key.json'

DISCOVERY_URL = (
    'https://monorail-prod.appspot.com/_ah/api/discovery/v1/apis/'
    '{api}/{apiVersion}/rest')

QUERIES = [
    ('Ecosystem Infra: unconfirmed and untriaged', { 'q': 'component:Blink>Infra>Ecosystem status:Unconfirmed,Untriaged ' }),
    ('Ecosystem Infra: P0 issues >2 days', { 'q': 'component:Blink>Infra>Ecosystem Pri=0 modified<today-2' }),
    ('Ecosystem Infra: P1 issues >30 days', { 'q': 'component:Blink>Infra>Ecosystem Pri=1 modified<today-30' }),
    ('Ecosystem Infra: P2 issues >60 days', { 'q': 'component:Blink>Infra>Ecosystem Pri=2 modified<today-60' }),
    ('Blink Infra: unconfirmed and untriaged', { 'q': 'component:Blink>Infra status:Unconfirmed,Untriaged ' }),
    ('Blink Infra: P0 issues >2 days', { 'q': 'component:Blink>Infra Pri=0 modified<today-2' }),
    ('Blink Infra: P1 issues >30 days', { 'q': 'component:Blink>Infra Pri=1 modified<today-30' }),
    ('Blink Infra: P2 issues >60 days', { 'q': 'component:Blink>Infra Pri=2 modified<today-60' }),
]

if os.path.exists(CREDENTIALS_FILE):
    credentials = GoogleCredentials.from_stream(CREDENTIALS_FILE)
else:
    credentials = GoogleCredentials.get_application_default()

monorail = googleapiclient.discovery.build(
    'monorail', 'v1',
    discoveryServiceUrl=DISCOVERY_URL,
    credentials=credentials)

for label, args in QUERIES:
    print('#', label)
    response = monorail.issues().list(projectId='chromium', can='open', **args).execute()
    if response['totalResults'] == 0:
        print('None')
        print()
        continue
    for issue in response['items']:
        print('* [{}](https://crbug.com/{})'.format(issue['title'], issue['id']))
    print()
