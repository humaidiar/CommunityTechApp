import json, requests, base64

# Set up the request URL
request_url = 'https://api.eventfinda.co.nz/v2/events.json?rows=2'

# Replace 'username' and 'password' with your actual Eventfinda API username and password
username = 'summeroftechcreatecamp'
password = 'tcr5sxb84vxj'#

# Encode the username and password in base64
credentials = f"{username}:{password}"
base64_credentials = base64.b64encode(credentials.encode()).decode()

# Set up the headers for the HTTP request
headers = {
    'Authorization': f'Basic {base64_credentials}'
}

# Make the API request
response = requests.get(request_url, headers=headers)

# Check if the request was successful
if response.status_code == 200:
    data = response.json()
    # Process the data as needed
    print(data)
else:
    print("Error:", response.status_code)

for event in data["events"]:
    print(event["name"])
    print(event["address"])
    print(event["is_free"])
    print(event['restrictions'])
    print(event['category']['url_slug'])
    
    for img in event["images"]["images"]:
        print(img['id'])
        for imgtran in img["transforms"]["transforms"]:
            print(imgtran["url"])