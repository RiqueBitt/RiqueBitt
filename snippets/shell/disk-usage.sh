#!/usr/bin/env bash
# As 15 maiores pastas/arquivos de um diretório (padrão: atual).
set -euo pipefail
du -ah "${1:-.}" 2>/dev/null | sort -rh | head -n 15
