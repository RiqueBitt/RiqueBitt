#!/usr/bin/env bash
# Inicia o servidor de Minecraft com as flags de memória do Aikar e reinicia sozinho se cair.
set -euo pipefail
MEM="${MEM:-4G}"
JAR="${JAR:-server.jar}"
while true; do
  java -Xms"$MEM" -Xmx"$MEM" -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 \
    -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 \
    -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 \
    -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 \
    -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 \
    -Daikars.new.flags=true -jar "$JAR" --nogui || true
  echo "Servidor parou. Reiniciando em 10s (Ctrl+C para cancelar)..."
  sleep 10
done
