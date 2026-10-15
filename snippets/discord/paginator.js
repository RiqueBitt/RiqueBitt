// Paginação com botões (discord.js v14). Só quem chamou o comando pode virar a página.
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } from 'discord.js';

export async function paginate(interaction, pages, { timeout = 120_000 } = {}) {
  let i = 0;
  const row = () => new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('prev').setEmoji('◀️').setStyle(ButtonStyle.Secondary).setDisabled(i === 0),
    new ButtonBuilder().setCustomId('page').setLabel(`${i + 1}/${pages.length}`).setStyle(ButtonStyle.Secondary).setDisabled(true),
    new ButtonBuilder().setCustomId('next').setEmoji('▶️').setStyle(ButtonStyle.Secondary).setDisabled(i === pages.length - 1),
  );
  const msg = await interaction.reply({ embeds: [pages[i]], components: [row()], fetchReply: true });
  const collector = msg.createMessageComponentCollector({ componentType: ComponentType.Button, time: timeout });
  collector.on('collect', async (btn) => {
    if (btn.user.id !== interaction.user.id) return btn.reply({ content: 'Só quem usou o comando pode mudar a página.', ephemeral: true });
    i += btn.customId === 'next' ? 1 : -1;
    await btn.update({ embeds: [pages[i]], components: [row()] });
  });
  collector.on('end', () => msg.edit({ components: [] }).catch(() => {}));
}
