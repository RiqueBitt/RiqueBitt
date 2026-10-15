"""Verifica de tempos em tempos se um site responde e avisa quando cai ou volta."""
import time
import urllib.error
import urllib.request


def online(url: str) -> bool:
    try:
        with urllib.request.urlopen(url, timeout=10) as r:
            return r.status < 500
    except urllib.error.HTTPError as e:
        return e.code < 500
    except Exception:
        return False


def monitorar(url: str, intervalo: int = 60) -> None:
    anterior = None
    while True:
        agora = online(url)
        if agora != anterior:
            print(time.strftime("%H:%M:%S"), url, "ONLINE" if agora else "FORA DO AR")
            anterior = agora
        time.sleep(intervalo)


if __name__ == "__main__":
    monitorar("https://example.com")
