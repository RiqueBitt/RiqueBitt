"""Reduz imagens grandes para no máximo N pixels de largura (precisa: pip install pillow)."""
from pathlib import Path
from PIL import Image


def redimensionar(pasta: Path, largura_max: int = 1280, qualidade: int = 85) -> None:
    saida = pasta / "reduzidas"
    saida.mkdir(exist_ok=True)
    for img_path in pasta.glob("*"):
        if img_path.suffix.lower() not in {".jpg", ".jpeg", ".png", ".webp"}:
            continue
        with Image.open(img_path) as img:
            img.thumbnail((largura_max, largura_max * 10))
            destino = saida / (img_path.stem + ".webp")
            img.save(destino, "WEBP", quality=qualidade)
            print(f"{img_path.name} -> {destino.name} ({img.width}x{img.height})")


if __name__ == "__main__":
    redimensionar(Path("."))
