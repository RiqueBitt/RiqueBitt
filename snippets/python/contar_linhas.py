"""Conta linhas de código por linguagem num projeto (ignora node_modules, .git, build...)."""
from collections import Counter
from pathlib import Path
import sys

IGNORAR = {"node_modules", ".git", "build", "dist", ".gradle", "__pycache__", ".venv"}
EXTS = {".js": "JavaScript", ".jsx": "JavaScript", ".ts": "TypeScript", ".py": "Python", ".java": "Java",
        ".kt": "Kotlin", ".lua": "Lua", ".css": "CSS", ".html": "HTML", ".cs": "C#", ".cpp": "C++"}


def contar(raiz: Path) -> Counter:
    total = Counter()
    for p in raiz.rglob("*"):
        if p.is_file() and p.suffix in EXTS and not IGNORAR.intersection(p.parts):
            with p.open(encoding="utf-8", errors="ignore") as f:
                total[EXTS[p.suffix]] += sum(1 for linha in f if linha.strip())
    return total


if __name__ == "__main__":
    for lang, n in contar(Path(sys.argv[1] if len(sys.argv) > 1 else ".")).most_common():
        print(f"{lang:<12} {n:>8,}".replace(",", "."))
