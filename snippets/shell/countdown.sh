#!/usr/bin/env bash
# Contagem regressiva no terminal: ./countdown.sh 90
set -euo pipefail
secs="${1:-60}"
while (( secs > 0 )); do
  printf '\r⏳ %02d:%02d ' $((secs / 60)) $((secs % 60))
  sleep 1
  ((secs--))
done
printf '\r🔔 Tempo!     \a\n'
