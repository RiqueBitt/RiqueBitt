#!/usr/bin/env bash
# Mostra pacotes desatualizados e vulnerabilidades de um projeto Node.
set -uo pipefail
echo "== Desatualizados =="
npm outdated || true
echo
echo "== Vulnerabilidades =="
npm audit --omit=dev || true
