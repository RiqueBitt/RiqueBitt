// Cooldown por usuário para comandos (discord.js v14).
// Uso: if (cooldown.hit(interaction.user.id, 'daily', 86_400_000)) return;
export class Cooldown {
  #map = new Map();

  /** Retorna os ms restantes (0 = liberado) e registra o uso quando liberado. */
  hit(userId, command, ms) {
    const key = `${command}:${userId}`;
    const now = Date.now();
    const until = this.#map.get(key) ?? 0;
    if (until > now) return until - now;
    this.#map.set(key, now + ms);
    return 0;
  }

  reset(userId, command) {
    this.#map.delete(`${command}:${userId}`);
  }
}

export const cooldown = new Cooldown();
