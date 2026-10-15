#!/usr/bin/env bash
# Backup compactado dos mundos do Minecraft, mantendo os últimos N (padrão 7).
set -euo pipefail
DEST="${DEST:-backups}"
KEEP="${KEEP:-7}"
mkdir -p "$DEST"
FILE="$DEST/mundos_$(date +%Y-%m-%d_%H-%M).tar.gz"
tar -czf "$FILE" world world_nether world_the_end 2>/dev/null || tar -czf "$FILE" world
echo "Backup: $FILE ($(du -h "$FILE" | cut -f1))"
ls -1t "$DEST"/mundos_*.tar.gz | tail -n +"$((KEEP + 1))" | xargs -r rm --
