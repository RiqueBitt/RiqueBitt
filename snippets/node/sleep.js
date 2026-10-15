// Espera e timeout para promessas.
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function withTimeout(promise, ms, message = 'Tempo esgotado') {
  let t;
  const timeout = new Promise((_, reject) => { t = setTimeout(() => reject(new Error(message)), ms); });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(t));
}
