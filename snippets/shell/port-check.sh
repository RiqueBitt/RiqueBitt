#!/usr/bin/env bash
# Mostra qual processo está usando uma porta: ./port-check.sh 3000
set -euo pipefail
PORT="${1:?informe a porta}"
if command -v lsof >/dev/null; then lsof -nP -iTCP:"$PORT" -sTCP:LISTEN
else ss -ltnp "sport = :$PORT"
fi
