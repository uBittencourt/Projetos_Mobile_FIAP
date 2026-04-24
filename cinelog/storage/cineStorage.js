import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE = 'cinelog_filmes';

export async function salvarFilmes(filmes) {
  // A FAZER: converter o array para string e salvar no AsyncStorage
  // Lembre: JSON.stringify antes de setItem!
  try {
    await AsyncStorage.setItem(CHAVE, JSON.stringify(filmes));
  } catch (e) {
    console.error('Erro ao salvar filmes:', e);
  }
}

export async function buscarFilmes() {
  // A FAZER: buscar do AsyncStorage e retornar o array (ou [] se vazio)
  // Lembre: JSON.parse depois de getItem!
  try {
    const dados = await AsyncStorage.getItem(CHAVE);
    return dados ? JSON.parse(dados) : [];
  } catch (e) {
    console.error('Erro ao buscar filmes:', e);
    return [];
  }
}

export async function deletarFilme(filme) {
  try {
    const dados = await buscarFilmes();
    let novaLista = dados.filter(item => item.titulo !== filme);
    await salvarFilmes(novaLista);
  } catch (e) {
    console.error('Erro ao deletar filme: ', e);
  }
}