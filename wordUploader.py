import requests

lines = []

# read every line from words.txt and add them to lines
with open('./words.txt') as f:
    lines = [line.strip() for line in f.readlines()
             if not line.startswith('-')]

# get all words from db
words = requests.get('http://localhost:3001/api/words/', timeout=15)

# if db not empty, remove duplicates from lines
if len(words.content) > 0:
    for word in words.json():
        if word['text'] in lines:
            lines.remove(word['text'])

# upload every line to db
for index, line in enumerate(lines, start=1):
    print('adding word ' + line + ' to database')

    r = requests.post('http://localhost:3001/api/words/',
                      json={'text': line}, timeout=15)

    if r.status_code == 200:
        print('word added, status code: ' + str(r.status_code))
        print('words in database: ' + str(index) +
              '/' + str(len(lines)) + '\n')
    else:
        print('something went wrong: ' + str(r.status_code) + " " + str(r))
        break
