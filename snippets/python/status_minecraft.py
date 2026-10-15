"""Consulta se um servidor de Minecraft (Java) está online e quantos jogadores tem.

Usa a API pública mcsrvstat.us. Uso: python status_minecraft.py jogar.meuservidor.com
"""
import json
import sys
import urllib.request


def status(endereco: str) -> dict:
    with urllib.request.urlopen(f"https://api.mcsrvstat.us/3/{endereco}", timeout=10) as r:
        return json.load(r)


if __name__ == "__main__":
    s = status(sys.argv[1])
    if s.get("online"):
        jogadores = s.get("players", {})
        print(f"Online · {jogadores.get('online', 0)}/{jogadores.get('max', 0)} jogadores · {s.get('version', '?')}")
    else:
        print("Offline")
