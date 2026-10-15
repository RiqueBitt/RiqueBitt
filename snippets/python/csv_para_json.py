"""Converte CSV em JSON (lista de objetos). Uso: python csv_para_json.py dados.csv > dados.json"""
import csv
import json
import sys


def converter(caminho: str) -> list[dict]:
    with open(caminho, newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


if __name__ == "__main__":
    json.dump(converter(sys.argv[1]), sys.stdout, ensure_ascii=False, indent=2)
