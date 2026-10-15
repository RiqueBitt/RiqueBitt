// Barramento de eventos mínimo com "on" que devolve a função de desligar.
export function createBus() {
  const handlers = new Map();
  return {
    on(event, fn) {
      if (!handlers.has(event)) handlers.set(event, new Set());
      handlers.get(event).add(fn);
      return () => handlers.get(event)?.delete(fn);
    },
    emit(event, payload) {
      handlers.get(event)?.forEach((fn) => { try { fn(payload); } catch (e) { console.error(e); } });
    },
  };
}
