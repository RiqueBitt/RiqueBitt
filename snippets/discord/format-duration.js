// Formata milissegundos em texto curto: 90061000 -> "1d 1h 1min 1s".
export function formatDuration(ms) {
  const parts = [];
  const units = [['d', 86_400_000], ['h', 3_600_000], ['min', 60_000], ['s', 1000]];
  let rest = Math.max(0, Math.floor(ms));
  for (const [label, size] of units) {
    const n = Math.floor(rest / size);
    if (n > 0) parts.push(`${n}${label}`);
    rest %= size;
  }
  return parts.length ? parts.join(' ') : '0s';
}
