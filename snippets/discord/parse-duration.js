// Lê durações digitadas pelo usuário: "1h30m", "2d", "45s" -> milissegundos (null se inválido).
const UNITS = { s: 1000, m: 60_000, h: 3_600_000, d: 86_400_000, w: 604_800_000 };

export function parseDuration(text) {
  const re = /(\d+)\s*([smhdw])/gi;
  let total = 0;
  let matched = '';
  for (const [all, n, unit] of String(text).matchAll(re)) {
    total += Number(n) * UNITS[unit.toLowerCase()];
    matched += all;
  }
  return total > 0 && matched.replace(/\s/g, '').length === String(text).replace(/\s/g, '').length ? total : null;
}
