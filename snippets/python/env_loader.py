"""Lê um arquivo .env (CHAVE=valor) para os.environ, sem biblioteca externa."""
import os
from pathlib import Path


def carregar_env(caminho: str = ".env", sobrescrever: bool = False) -> None:
    arquivo = Path(caminho)
    if not arquivo.exists():
        return
    for linha in arquivo.read_text(encoding="utf-8").splitlines():
        linha = linha.strip()
        if not linha or linha.startswith("#") or "=" not in linha:
            continue
        chave, valor = linha.split("=", 1)
        valor = valor.strip().strip('"').strip("'")
        if sobrescrever or chave.strip() not in os.environ:
            os.environ[chave.strip()] = valor
