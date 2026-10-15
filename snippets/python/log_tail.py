"""Acompanha um log (como tail -f) e mostra só as linhas com as palavras pedidas.

Uso: python log_tail.py logs/latest.log ERROR WARN
"""
import sys
import time


def seguir(caminho: str, filtros: list[str]) -> None:
    with open(caminho, encoding="utf-8", errors="ignore") as f:
        f.seek(0, 2)
        while True:
            linha = f.readline()
            if not linha:
                time.sleep(0.5)
                continue
            if not filtros or any(p in linha for p in filtros):
                print(linha, end="")


if __name__ == "__main__":
    seguir(sys.argv[1], sys.argv[2:])
