// Envolve rotas async do Express para os erros chegarem no middleware de erro.
export const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

// Middleware de erro final (registre por último):
export function errorMiddleware(err, req, res, _next) {
  const status = err.status ?? 500;
  if (status >= 500) console.error(err);
  res.status(status).json({ error: status >= 500 ? 'Erro interno.' : err.message });
}
