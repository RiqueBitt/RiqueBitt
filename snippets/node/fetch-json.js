// fetch com JSON, timeout e erro legível.
export async function fetchJson(url, { timeoutMs = 10_000, ...init } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...init, signal: ctrl.signal, headers: { Accept: 'application/json', ...init.headers } });
    const body = await res.text();
    const data = body ? JSON.parse(body) : null;
    if (!res.ok) throw Object.assign(new Error(data?.error ?? `HTTP ${res.status}`), { status: res.status, data });
    return data;
  } finally {
    clearTimeout(t);
  }
}
