import AsyncStorage from '@react-native-async-storage/async-storage';

// Salva um usuário usando o e-mail como chave única
export async function salvarUsuario(usuario) {
  try {
    const chave = `usuario_${usuario.email}`;
    await AsyncStorage.setItem(chave, JSON.stringify(usuario));
  } catch (e) {
    console.error('Erro ao salvar usuário:', e);
  }
}

// Busca um usuário pelo e-mail
export async function buscarUsuario(email) {
  try {
    const chave = `usuario_${email}`;
    const dados = await AsyncStorage.getItem(chave);
    return dados ? JSON.parse(dados) : null;
  } catch (e) {
    console.error('Erro ao buscar usuário:', e);
    return null;
  }
}