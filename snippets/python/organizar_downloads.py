"""Organiza a pasta Downloads em subpastas por tipo (Imagens, Vídeos, Documentos...)."""
from pathlib import Path
import shutil

TIPOS = {
    "Imagens": {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"},
    "Videos": {".mp4", ".mkv", ".mov", ".webm"},
    "Musicas": {".mp3", ".wav", ".ogg", ".flac"},
    "Documentos": {".pdf", ".docx", ".xlsx", ".pptx", ".txt", ".md"},
    "Compactados": {".zip", ".rar", ".7z", ".tar", ".gz"},
    "Programas": {".exe", ".msi", ".apk", ".jar", ".appimage"},
}


def organizar(pasta: Path) -> None:
    for arquivo in pasta.iterdir():
        if not arquivo.is_file():
            continue
        destino = next((nome for nome, exts in TIPOS.items() if arquivo.suffix.lower() in exts), "Outros")
        alvo = pasta / destino
        alvo.mkdir(exist_ok=True)
        shutil.move(str(arquivo), str(alvo / arquivo.name))
        print(f"{arquivo.name} -> {destino}/")


if __name__ == "__main__":
    organizar(Path.home() / "Downloads")
