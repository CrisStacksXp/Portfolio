import os
import json
import pprint
from dotenv import load_dotenv

from py.request import GetDataAPI
from py.structureJson import StructureJson

load_dotenv()

USER = os.getenv("NAMEUSER")
TOKEN = os.getenv("TOKEN")

URL_GITHUB = f"https://api.github.com/users/{USER}"
HEADERS = { "Authorization": f"Bearer {TOKEN}" } if TOKEN else {}

github = GetDataAPI(URL_GITHUB, headers=HEADERS)
data = github.get_data()

# Monta o JSON do portfólio
portfolio = StructureJson(data)
portfolio_json = portfolio.build_json()

# Exibe organizado no terminal
pprint.pprint(portfolio_json)

# Salva arquivo JSON localmente
with open("../scripts/util/portfolio.json", "w", encoding = "utf-8") as file:
    json.dump(portfolio_json, file, indent = 4, ensure_ascii = False)

print("\n🚀 JSON criado com sucesso em 'portfolio.json'!")