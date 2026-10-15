// Confere permissões de quem usou o comando e responde com o que falta.
import { PermissionsBitField } from 'discord.js';

export function missingPermissions(member, ...perms) {
  const need = new PermissionsBitField(perms);
  return member.permissions.missing(need);
}

export async function requirePermissions(interaction, ...perms) {
  const missing = missingPermissions(interaction.member, ...perms);
  if (missing.length === 0) return true;
  await interaction.reply({ content: `Você precisa de: ${missing.join(', ')}`, ephemeral: true });
  return false;
}
