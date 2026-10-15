// Repete uma função assíncrona com espera exponencial (500ms, 1s, 2s...).
export async function retry(fn, { attempts = 4, baseMs = 500, shouldRetry = () => true } = {}) {
  let lastError;
  for (let i = 0; i < attempts; i += 1) {
    try {
      return await fn(i);
    } catch (err) {
      lastError = err;
      if (i === attempts - 1 || !shouldRetry(err)) break;
      const wait = baseMs * 2 ** i + Math.random() * 100;
      await new Promise((r) => setTimeout(r, wait));
    }
  }
  throw lastError;
}
