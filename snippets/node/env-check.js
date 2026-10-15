// Confere variáveis de ambiente obrigatórias na inicialização (falha cedo, com mensagem clara).
export function requireEnv(names) {
  const missing = names.filter((n) => !process.env[n] || !process.env[n].trim());
  if (missing.length) {
    console.error(`Faltam variáveis de ambiente: ${missing.join(', ')}`);
    process.exit(1);
  }
  return Object.fromEntries(names.map((n) => [n, process.env[n]]));
}

// const { DISCORD_TOKEN, DATABASE_URL } = requireEnv(['DISCORD_TOKEN', 'DATABASE_URL']);
