// Sorteio justo (giveaway): escolhe N vencedores diferentes com Fisher–Yates.
export function pickWinners(entries, count = 1) {
  const pool = [...new Set(entries)];
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
