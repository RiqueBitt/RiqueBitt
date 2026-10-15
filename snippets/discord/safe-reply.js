// Responde uma interação sem erro "already replied": escolhe reply, followUp ou editReply.
export async function safeReply(interaction, payload) {
  const data = typeof payload === 'string' ? { content: payload } : payload;
  if (interaction.deferred && !interaction.replied) return interaction.editReply(data);
  if (interaction.replied) return interaction.followUp(data);
  return interaction.reply(data);
}
