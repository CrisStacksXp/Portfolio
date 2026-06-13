import requests

class GetDataAPI:

    def __init__(self, url, headers=None):
        self.url = url
        self.headers = headers

    def get_data(self):
        try:
            response = requests.get(self.url, headers=self.headers)
            return response.json() if response.status_code == 200 else None
        except Exception:
            return None
        
    def get_dynamic_projects(self, username):
        """Busca, filtra e formata os projetos do GitHub dinamicamente."""
        url_repos = f"https://api.github.com/users/{username}/repos?sort=updated&per_page=100"
        try:
            response = requests.get(url_repos, headers=self.headers)
            if response.status_code != 200:
                return []
            
            repos = response.json()
            filtered_projects = []

            for repo in repos:
                topics = repo.get("topics", [])
                
                if "portfolio" not in topics:
                    continue

                repo_name = repo.get("name")
                
                url_lang = f"https://api.github.com/repos/{username}/{repo_name}/languages"
                lang_res = requests.get(url_lang, headers=self.headers)
                languages_data = lang_res.json() if lang_res.status_code == 200 else {}
                
                total_bytes = sum(languages_data.values())
                formatted_languages = []
                if total_bytes > 0:
                    for lang, bytes_count in languages_data.items():
                        percentage = round((bytes_count / total_bytes) * 100, 1)
                        formatted_languages.append({"name": lang, "percent": percentage})

                frameworks = [t.capitalize() for t in topics if t not in ["portfolio", "typescript", "javascript", "html", "css", "python"]]

                links = [
                    {"a": repo.get("html_url"), "icon": "github.svg", "name": "Go code"}
                ]
                if repo.get("homepage"):
                    links.append({"a": repo.get("homepage"), "icon": "netlify.svg", "name": "Go Website"})
                
                img_url = f"https://raw.githubusercontent.com/{username}/{repo_name}/main/screenshot.png"

                project_obj = {
                    "img": img_url,
                    "title": repo_name.replace("_", " ").replace("-", " ").title(),
                    "description": repo.get("description") or "Sem descrição fornecida.",
                    "languages": formatted_languages,
                    "framework": frameworks,
                    "links": links
                }
                
                filtered_projects.append(project_obj)
                
            return filtered_projects
        except Exception as e:
            print(f"Erro ao processar projetos: {e}")
            return []