// Mensagem de boas-vindas com variáveis: {user}, {server}, {count}.
export function renderWelcome(template, member) {
  return template
    .replaceAll('{user}', `<@${member.id}>`)
    .replaceAll('{server}', member.guild.name)
    .replaceAll('{count}', String(member.guild.memberCount));
}

// client.on('guildMemberAdd', (m) => canal.send(renderWelcome('Bem-vindo {user} ao {server}! Você é o membro #{count}.', m)));
