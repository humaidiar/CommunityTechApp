import json, urllib2, base64

url = 'https://api.eventfinda.co.nz/v2/events.json?rows=2'
username = 'username';
password = 'password';
request = urllib2.Request(url)
base64string = base64.encodestring('%s:%s' % (username, password)).replace('\n', '')
request.add_header("Authorization", "Basic %s" % base64string)  

result = urllib2.urlopen(request)
data = json.load(result)

for event in data["events"]:
    print event["name"]
    for img in event["images"]["images"]:
        print img['id']
        for imgtran in img["transforms"]["transforms"]:
            print imgtran["url"]