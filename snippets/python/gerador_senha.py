"""Gera senhas fortes com o módulo secrets (seguro para senhas, diferente de random)."""
import secrets
import string


def gerar_senha(tamanho: int = 16, simbolos: bool = True) -> str:
    letras = string.ascii_letters + string.digits + ("!@#$%&*-_?" if simbolos else "")
    while True:
        senha = "".join(secrets.choice(letras) for _ in range(tamanho))
        tem_tudo = (any(c.islower() for c in senha) and any(c.isupper() for c in senha)
                    and any(c.isdigit() for c in senha))
        if tem_tudo:
            return senha


if __name__ == "__main__":
    print(gerar_senha())
