// Se rodando localmente, pega o backend do local host
// Se rodando na nuvem, pega o endereco da variavel de ambiente configurada
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';