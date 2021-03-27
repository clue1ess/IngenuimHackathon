#url : https://www.nhsinform.scot/illnesses-and-conditions/a-to-z

import requests
from bs4 import BeautifulSoup
import json

base_url = 'https://www.nhsinform.scot'
urls = []
disease_name = []
info = []

URL = 'https://www.nhsinform.scot/illnesses-and-conditions/a-to-z'
page = requests.get(URL)
soup = BeautifulSoup(page.content, 'html.parser')
mydivs = soup.find_all("a", {"class": "module"})

for div in mydivs:
    url = base_url + div['href']
    try :
        page = requests.get(url)
        soup = BeautifulSoup(page.content, 'html.parser')
        my_div_list = soup.find_all("div", {"class": "editor"})

        text = my_div_list[0].get_text()

        info.append(text)
        disease_name.append(url.split('/')[-1].replace("-", " ").title())
    except:
        continue
    
json_obj = [{"Name": d, "Information": i} for d, i in zip(disease_name, info)]

with open('MediPedia.json', 'w') as outfile:
    json.dump(json_obj, outfile)