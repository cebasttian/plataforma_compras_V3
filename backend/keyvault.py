import json
import requests
from urllib.parse import quote_plus
from cryptography.fernet import Fernet
import urllib3

urllib3.disable_warnings()

class Key:
    def __init__(self, key):
        self.key = key.encode('UTF-8') if isinstance(key, str) else key
        self.cipher_suite = Fernet(self.key)

    def encrypt(self, text):
        text = text.encode('UTF-8') if isinstance(text, str) else text
        return self.cipher_suite.encrypt(text).decode('UTF-8')

    def decrypt(self, text):
        text = text.encode('UTF-8') if isinstance(text, str) else text
        return self.cipher_suite.decrypt(text).decode('UTF-8')

class KeyVaultClient:
    def __init__(self, server, password):
        self.server = server
        self.encrypter = Key(password)
        self.encrypted = True

    def get_value(self, key):
        url = f"{self.server}/{quote_plus(key)}"
        resp = json.loads(requests.get(url, verify=False).text)
        if resp['status'] == 0:
            return self.encrypter.decrypt(resp['value'])
        else:
            print(f"Error: '{key}' not found.")
            return None

# Instancia global
key_vault = KeyVaultClient(
    "https://192.168.100.240:300/key_vault/key_vault",
    "GaAZx41LcHLq-vmrjH2WgnwSVslmRjXfcac6N_cU7s4="
)
