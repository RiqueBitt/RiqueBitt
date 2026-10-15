// Curva de XP por nível (estilo MEE6): xp para ir do nível n para n+1.
export const xpForLevel = (n) => 5 * n * n + 50 * n + 100;

/** Converte XP total em { level, current, needed }. */
export function levelFromXp(totalXp) {
  let level = 0;
  let rest = totalXp;
  while (rest >= xpForLevel(level)) {
    rest -= xpForLevel(level);
    level += 1;
  }
  return { level, current: rest, needed: xpForLevel(level) };
}

/** XP aleatório por mensagem (15–25), como nos bots populares. */
export const randomMessageXp = () => 15 + Math.floor(Math.random() * 11);
