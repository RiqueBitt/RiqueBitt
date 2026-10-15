"""Formata (ou valida) arquivos JSON in-place com indentação de 2 espaços.

Uso: python json_pretty.py config.json outro.json
"""
import json
import sys

for caminho in sys.argv[1:]:
    try:
        with open(caminho, encoding="utf-8") as f:
            dados = json.load(f)
    except json.JSONDecodeError as e:
        print(f"{caminho}: JSON inválido na linha {e.lineno}, coluna {e.colno}: {e.msg}")
        continue
    with open(caminho, "w", encoding="utf-8") as f:
        json.dump(dados, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"{caminho}: ok")
