"""Renomeia arquivos em lote com numeração: foto_001.jpg, foto_002.jpg...

Uso: python renomear_em_lote.py <pasta> <prefixo> [--aplicar]
Sem --aplicar só mostra o que faria.
"""
import sys
from pathlib import Path


def main() -> None:
    pasta, prefixo = Path(sys.argv[1]), sys.argv[2]
    aplicar = "--aplicar" in sys.argv
    arquivos = sorted(p for p in pasta.iterdir() if p.is_file())
    for i, arquivo in enumerate(arquivos, start=1):
        novo = arquivo.with_name(f"{prefixo}_{i:03d}{arquivo.suffix.lower()}")
        print(f"{arquivo.name} -> {novo.name}")
        if aplicar:
            arquivo.rename(novo)
    if not aplicar:
        print("\n(Simulação. Rode de novo com --aplicar para renomear.)")


if __name__ == "__main__":
    main()
