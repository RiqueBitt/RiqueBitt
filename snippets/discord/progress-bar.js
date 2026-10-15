// Barra de progresso em texto para embeds: progressBar(30, 100) -> "▰▰▰▱▱▱▱▱▱▱ 30%".
export function progressBar(value, max, size = 10) {
  const ratio = max > 0 ? Math.min(1, Math.max(0, value / max)) : 0;
  const filled = Math.round(ratio * size);
  return `${'▰'.repeat(filled)}${'▱'.repeat(size - filled)} ${Math.round(ratio * 100)}%`;
}
