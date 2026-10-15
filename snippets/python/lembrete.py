"""Lembrete no terminal: python lembrete.py 25 "Pausa!" (minutos, mensagem). Toca um bip no fim."""
import sys
import time


def lembrar(minutos: float, mensagem: str) -> None:
    fim = time.time() + minutos * 60
    while (resta := fim - time.time()) > 0:
        m, s = divmod(int(resta), 60)
        print(f"\r⏳ {m:02d}:{s:02d}  ", end="", flush=True)
        time.sleep(1)
    print(f"\r🔔 {mensagem}\a")


if __name__ == "__main__":
    lembrar(float(sys.argv[1]), " ".join(sys.argv[2:]) or "Tempo!")
