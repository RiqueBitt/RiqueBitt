// Embeds padronizados (sucesso, erro, aviso, info) com as cores do projeto.
import { EmbedBuilder } from 'discord.js';

const COLORS = { ok: 0x23a55a, erro: 0xf23f43, aviso: 0xf0b232, info: 0x4c9fff };

export const embed = (type, title, description) =>
  new EmbedBuilder().setColor(COLORS[type] ?? COLORS.info).setTitle(title).setDescription(description ?? null).setTimestamp();

export const ok = (t, d) => embed('ok', `✅ ${t}`, d);
export const erro = (t, d) => embed('erro', `❌ ${t}`, d);
export const aviso = (t, d) => embed('aviso', `⚠️ ${t}`, d);
