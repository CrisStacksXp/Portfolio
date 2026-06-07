import requests

class GetDataAPI:

    def __init__(self, url, headers=None):
        self.url = url
        self.headers = headers

    def get_data(self):
        try:
            response = requests.get(self.url, headers=self.headers)
            if response.status_code == 200:
                return response.json()
            
            print(f"Erro na API: {response.status_code}")
            return None
        except requests.exceptions.RequestException as e:
            print(f"Erro de conexão: {e}")
            return None