// Captura erros dos comandos sem derrubar o bot e responde ao usuário.
export function wrapCommand(execute) {
  return async (interaction, ...rest) => {
    try {
      await execute(interaction, ...rest);
    } catch (err) {
      console.error(`[erro] /${interaction.commandName}:`, err);
      const msg = { content: 'Algo deu errado ao executar esse comando. Tente de novo.', ephemeral: true };
      if (interaction.deferred || interaction.replied) await interaction.followUp(msg).catch(() => {});
      else await interaction.reply(msg).catch(() => {});
    }
  };
}

process.on('unhandledRejection', (e) => console.error('[promessa sem tratamento]', e));
