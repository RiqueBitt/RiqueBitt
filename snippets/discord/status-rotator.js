// Troca o status do bot a cada X segundos.
import { ActivityType } from 'discord.js';

export function rotateStatus(client, statuses, everyMs = 30_000) {
  let i = 0;
  const apply = () => {
    const s = statuses[i % statuses.length];
    const text = typeof s.text === 'function' ? s.text(client) : s.text;
    client.user.setActivity(text, { type: s.type ?? ActivityType.Playing });
    i += 1;
  };
  apply();
  return setInterval(apply, everyMs);
}

// rotateStatus(client, [{ text: (c) => `${c.guilds.cache.size} servidores` }, { text: '/ajuda', type: ActivityType.Listening }]);
