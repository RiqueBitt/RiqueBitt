// Monta um ranking em texto com medalhas para os 3 primeiros.
const MEDALS = ['🥇', '🥈', '🥉'];

export function leaderboard(rows, { valueLabel = 'XP', limit = 10 } = {}) {
  return rows
    .slice()
    .sort((a, b) => b.value - a.value)
    .slice(0, limit)
    .map((r, i) => `${MEDALS[i] ?? `**${i + 1}.**`} <@${r.userId}> — ${r.value.toLocaleString('pt-BR')} ${valueLabel}`)
    .join('\n') || 'Ninguém no ranking ainda.';
}
