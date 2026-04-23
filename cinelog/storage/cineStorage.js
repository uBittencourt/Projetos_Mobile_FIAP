import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE = 'cinelog_filmes';

export async function salvarFilmes(filmes) {
  // A FAZER: converter o array para string e salvar no AsyncStorage
  // Lembre: JSON.stringify antes de setItem!
}

export async function buscarFilmes() {
  // A FAZER: buscar do AsyncStorage e retornar o array (ou [] se vazio)
  // Lembre: JSON.parse depois de getItem!
}