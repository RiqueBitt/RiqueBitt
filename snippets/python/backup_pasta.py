"""Faz backup .zip de uma pasta com data no nome e apaga os backups mais antigos (mantém N)."""
from datetime import datetime
from pathlib import Path
import shutil


def backup(origem: Path, destino: Path, manter: int = 7) -> Path:
    destino.mkdir(parents=True, exist_ok=True)
    nome = f"{origem.name}_{datetime.now():%Y-%m-%d_%H-%M}"
    arquivo = Path(shutil.make_archive(str(destino / nome), "zip", origem))
    antigos = sorted(destino.glob(f"{origem.name}_*.zip"))[:-manter]
    for velho in antigos:
        velho.unlink()
    return arquivo


if __name__ == "__main__":
    print(backup(Path("world"), Path("backups")))
