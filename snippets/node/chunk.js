// Divide uma lista em pedaços: chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]].
export const chunk = (list, size) =>
  Array.from({ length: Math.ceil(list.length / size) }, (_, i) => list.slice(i * size, i * size + size));

// Executa tarefas assíncronas com no máximo `limit` ao mesmo tempo.
export async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  const worker = async () => {
    while (next < items.length) { const i = next++; out[i] = await fn(items[i], i); }
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return out;
}
