#!/usr/bin/env bash
# Apaga branches locais que já foram mescladas na main (nunca apaga main/master/a atual).
set -euo pipefail
git fetch --prune
current="$(git branch --show-current)"
git branch --merged main | sed 's/^[* ]*//' | grep -vE "^(main|master|$current)$" | while read -r b; do
  git branch -d "$b"
done
