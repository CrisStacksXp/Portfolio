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
profile_data = github.get_data()

# 2. Busca e monta os Projetos Dinamicamente baseado nas Tags do GitHub
projects_data = github.get_dynamic_projects(USER)

# 3. Passa tudo para estruturar o JSON
# Vamos passar os projetos como um parâmetro extra ou embutido
portfolio = StructureJson(profile_data)
portfolio_json = portfolio.build_json()

# Injeta os projetos dinâmicos gerados no lugar do estático
portfolio_json["projects"] = projects_data

pprint.pprint(portfolio_json)  # Debug: Verificar o JSON final antes de salvar

# Salva o arquivo JSON final
with open("../scripts/util/portfolio.json", "w", encoding="utf-8") as file:
    json.dump(portfolio_json, file, indent=4, ensure_ascii=False)

print("🚀 Portfólio atualizado com projetos dinâmicos!") 