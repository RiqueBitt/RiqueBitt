"""Envia mensagem/embed para um webhook do Discord (só biblioteca padrão)."""
import json
import urllib.request


def enviar(webhook_url: str, conteudo: str = "", titulo: str | None = None, descricao: str | None = None, cor: int = 0x4C9FFF) -> None:
    payload = {"content": conteudo}
    if titulo or descricao:
        payload["embeds"] = [{"title": titulo, "description": descricao, "color": cor}]
    req = urllib.request.Request(
        webhook_url,
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json", "User-Agent": "webhook-script"},
    )
    urllib.request.urlopen(req, timeout=10).close()


# enviar(URL, titulo="Servidor online", descricao="O servidor de Minecraft voltou.")
