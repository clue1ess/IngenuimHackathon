#url : https://www.nhsinform.scot/symptoms-and-self-help/a-to-z

import requests
from bs4 import BeautifulSoup
import json

base_url = 'https://www.nhsinform.scot'
urls = []
disease_name = []
treatment = []

URL = 'https://www.nhsinform.scot/symptoms-and-self-help/a-to-z'
page = requests.get(URL)
soup = BeautifulSoup(page.content, 'html.parser')
mydivs = soup.find_all("a", {"class": "module"})

for div in mydivs:
    url = base_url + div['href']
    
    page = requests.get(url)
    soup = BeautifulSoup(page.content, 'html.parser')
    my_div_list = soup.find_all("div", {"class": "editor"})
    
    text = my_div_list[0].get_text()
    treatment.append(text)
    disease_name.append(url.split('/')[-1].replace("-", " ").title())
    
json_obj = [{"Name": d, "Cure": t} for d, t in zip(disease_name, treatment)]

with open('MediCure.json', 'w', encoding="utf-8") as outfile:
    json.dump(json_obj, outfile)