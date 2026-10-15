// Cache em memória com validade (TTL) e limite de itens.
export class TtlCache {
  constructor({ ttlMs = 60_000, max = 500 } = {}) { this.ttl = ttlMs; this.max = max; this.map = new Map(); }

  get(key) {
    const hit = this.map.get(key);
    if (!hit) return undefined;
    if (hit.exp < Date.now()) { this.map.delete(key); return undefined; }
    return hit.value;
  }

  set(key, value) {
    if (this.map.size >= this.max) this.map.delete(this.map.keys().next().value);
    this.map.set(key, { value, exp: Date.now() + this.ttl });
    return value;
  }

  async wrap(key, loader) {
    const v = this.get(key);
    return v !== undefined ? v : this.set(key, await loader());
  }
}
