# Day 59: Webscraping in Python

import requests
from bs4 import BeautifulSoup

# prp install requests
# pip install BeautifulSoup

url = ''

response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    title = soup.title.string
    print('Page Title', title)

    links = soup.find_all('a')

    for link in links:
        print('Link Finded: ', link.get('href'))
else:
    print('Failed to access page:', response.status_code)

    

