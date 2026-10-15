// Pede confirmação com botões Sim/Não. Retorna true/false (false também no tempo esgotado).
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export async function confirm(interaction, text, { timeout = 30_000 } = {}) {
  const row = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('yes').setLabel('Confirmar').setStyle(ButtonStyle.Success),
    new ButtonBuilder().setCustomId('no').setLabel('Cancelar').setStyle(ButtonStyle.Danger),
  );
  const msg = await interaction.reply({ content: text, components: [row], ephemeral: true, fetchReply: true });
  try {
    const btn = await msg.awaitMessageComponent({ filter: (b) => b.user.id === interaction.user.id, time: timeout });
    await btn.update({ components: [] });
    return btn.customId === 'yes';
  } catch {
    await interaction.editReply({ content: 'Tempo esgotado.', components: [] }).catch(() => {});
    return false;
  }
}
