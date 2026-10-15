// Registra os slash commands (num servidor de teste = na hora; global = até 1h).
import { REST, Routes } from 'discord.js';

export async function registerCommands({ token, clientId, guildId, commands }) {
  const rest = new REST({ version: '10' }).setToken(token);
  const body = [...commands.values()].map((c) => c.data.toJSON());
  const route = guildId ? Routes.applicationGuildCommands(clientId, guildId) : Routes.applicationCommands(clientId);
  await rest.put(route, { body });
  console.log(`[comandos] ${body.length} registrados ${guildId ? 'no servidor de teste' : 'globalmente'}`);
}
