// Carrega todos os comandos de ./commands (cada arquivo exporta { data, execute }).
import { readdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

export async function loadCommands(dir) {
  const commands = new Map();
  for (const file of await readdir(dir)) {
    if (!file.endsWith('.js')) continue;
    const mod = await import(pathToFileURL(path.join(dir, file)).href);
    if (!mod.data?.name || typeof mod.execute !== 'function') {
      console.warn(`[comandos] ${file} ignorado: falta data ou execute`);
      continue;
    }
    commands.set(mod.data.name, mod);
  }
  return commands;
}
