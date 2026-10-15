"""Encontra arquivos duplicados (mesmo conteúdo) numa pasta, pelo hash SHA-256."""
from collections import defaultdict
from hashlib import sha256
from pathlib import Path
import sys


def hash_arquivo(caminho: Path) -> str:
    h = sha256()
    with caminho.open("rb") as f:
        for bloco in iter(lambda: f.read(1 << 20), b""):
            h.update(bloco)
    return h.hexdigest()


def duplicados(pasta: Path) -> list[list[Path]]:
    por_tamanho = defaultdict(list)
    for p in pasta.rglob("*"):
        if p.is_file():
            por_tamanho[p.stat().st_size].append(p)
    por_hash = defaultdict(list)
    for lista in por_tamanho.values():
        if len(lista) > 1:
            for p in lista:
                por_hash[hash_arquivo(p)].append(p)
    return [g for g in por_hash.values() if len(g) > 1]


if __name__ == "__main__":
    for grupo in duplicados(Path(sys.argv[1] if len(sys.argv) > 1 else ".")):
        print("\n".join(map(str, grupo)), end="\n\n")
