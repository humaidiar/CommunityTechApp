import requests
import base64

# Set up the request URL for Eventfinda API
request_url = 'https://api.eventfinda.co.nz/v2/events.json'

# Replace 'username' and 'password' with your actual Eventfinda API username and password
username = 'summeroftechcreatecamp'
password = 'tcr5sxb84vxj'

# Encode the username and password in base64
credentials = f"{username}:{password}"
base64_credentials = base64.b64encode(credentials.encode()).decode()

# Function to make the API request based on the category
def event_suggestions(category):
    # Set up the request parameters
    params = {
        'rows': 100,
        'q': (category or "Dance")
       # 'category': category,  # Input category
    }

    # Set up the headers for the HTTP request
    headers = {
        'Authorization': f'Basic {base64_credentials}'
    }

    # Make the API request
    response = requests.get(request_url, params=params, headers=headers)

    # Check if the request was successful
    if response.status_code == 200:
        data = response.json()
        # Process and output the event details
        for event in data["events"]:
            print("Event Name:", event["name"])
            print("Address:", event["address"])
            print("Is Free:", event["is_free"])
            print("Restrictions:", event.get('restrictions', 'None'))
            print(event['category']['name'])
            print("-" * 20)
    else:
        print("Error:", response.status_code)

# Input the category from the user

event_suggestions("Boxing")