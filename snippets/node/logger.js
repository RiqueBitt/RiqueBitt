// Logger com horário, nível e cores no terminal (sem dependências).
const COLORS = { debug: 90, info: 36, warn: 33, error: 31 };
const LEVELS = ['debug', 'info', 'warn', 'error'];
const min = LEVELS.indexOf(process.env.LOG_LEVEL ?? 'info');

function log(level, ...args) {
  if (LEVELS.indexOf(level) < min) return;
  const time = new Date().toLocaleTimeString('pt-BR');
  const tag = `\x1b[${COLORS[level]}m${level.toUpperCase().padEnd(5)}\x1b[0m`;
  (level === 'error' ? console.error : console.log)(`[${time}] ${tag}`, ...args);
}

export const logger = Object.fromEntries(LEVELS.map((l) => [l, (...a) => log(l, ...a)]));
