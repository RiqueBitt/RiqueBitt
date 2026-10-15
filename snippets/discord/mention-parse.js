// Extrai IDs de menções de usuário, cargo e canal de um texto.
export function parseMentions(text) {
  const grab = (re) => [...String(text).matchAll(re)].map((m) => m[1]);
  return {
    users: grab(/<@!?(\d{17,20})>/g),
    roles: grab(/<@&(\d{17,20})>/g),
    channels: grab(/<#(\d{17,20})>/g),
  };
}
