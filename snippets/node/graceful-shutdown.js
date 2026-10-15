// Desliga com calma: fecha servidor/banco/bot antes de sair (Ctrl+C, deploy, restart).
export function onShutdown(cleanup, { timeoutMs = 10_000 } = {}) {
  let closing = false;
  const stop = async (signal) => {
    if (closing) return;
    closing = true;
    console.log(`[${signal}] encerrando...`);
    const force = setTimeout(() => process.exit(1), timeoutMs);
    force.unref();
    try { await cleanup(); } catch (e) { console.error('Erro ao encerrar:', e); }
    process.exit(0);
  };
  process.on('SIGINT', stop);
  process.on('SIGTERM', stop);
}
