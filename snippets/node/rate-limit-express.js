// Limite simples de requisições por IP para Express (sem dependências).
export function rateLimit({ windowMs = 60_000, max = 60 } = {}) {
  const hits = new Map();
  setInterval(() => hits.clear(), windowMs).unref();
  return (req, res, next) => {
    const key = req.ip;
    const n = (hits.get(key) ?? 0) + 1;
    hits.set(key, n);
    res.setHeader('X-RateLimit-Remaining', Math.max(0, max - n));
    if (n > max) return res.status(429).json({ error: 'Muitas requisições. Tente de novo em instantes.' });
    return next();
  };
}
