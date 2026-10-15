// Validação leve de dados de formulário (sem biblioteca).
export function validate(data, rules) {
  const errors = {};
  for (const [field, rule] of Object.entries(rules)) {
    const v = data[field];
    if (rule.required && (v === undefined || v === null || String(v).trim() === '')) { errors[field] = 'Obrigatório'; continue; }
    if (v == null) continue;
    if (rule.min && String(v).length < rule.min) errors[field] = `Mínimo de ${rule.min} caracteres`;
    if (rule.max && String(v).length > rule.max) errors[field] = `Máximo de ${rule.max} caracteres`;
    if (rule.pattern && !rule.pattern.test(String(v))) errors[field] = rule.message ?? 'Formato inválido';
  }
  return { ok: Object.keys(errors).length === 0, errors };
}
