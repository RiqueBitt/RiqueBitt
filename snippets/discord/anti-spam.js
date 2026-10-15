// Detecta flood: mais de `max` mensagens em `windowMs` pelo mesmo usuário.
export function createSpamGuard({ max = 5, windowMs = 4000 } = {}) {
  const hits = new Map();
  return (userId, now = Date.now()) => {
    const list = (hits.get(userId) ?? []).filter((t) => now - t < windowMs);
    list.push(now);
    hits.set(userId, list);
    return list.length > max;
  };
}

// const isSpam = createSpamGuard(); if (isSpam(msg.author.id)) msg.member.timeout(60_000, 'Flood');
