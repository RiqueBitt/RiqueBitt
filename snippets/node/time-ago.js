// "há 5 minutos", "há 2 dias" a partir de uma data.
const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });
const STEPS = [['year', 31_536_000], ['month', 2_592_000], ['week', 604_800], ['day', 86_400], ['hour', 3600], ['minute', 60], ['second', 1]];

export function timeAgo(date, now = Date.now()) {
  const diff = Math.round((new Date(date).getTime() - now) / 1000);
  for (const [unit, secs] of STEPS) {
    if (Math.abs(diff) >= secs || unit === 'second') return rtf.format(Math.round(diff / secs), unit);
  }
  return '';
}
