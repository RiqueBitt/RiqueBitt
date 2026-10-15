// Recompensa diária com sequência (streak): perde a sequência se passar de 48h.
const DAY = 86_400_000;

export function claimDaily(state, now = Date.now(), base = 100) {
  const last = state.lastClaim ?? 0;
  if (now - last < DAY) return { ok: false, waitMs: DAY - (now - last), state };
  const streak = now - last <= 2 * DAY ? (state.streak ?? 0) + 1 : 1;
  const reward = base + Math.min(streak, 7) * 20;
  return { ok: true, reward, state: { lastClaim: now, streak } };
}
