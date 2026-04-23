import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function CineLog() {
  const { usuarioLogado, logout } = useAuth();
  const [filmes, setFilmes] = useState([]);
  const [nomeFilme, setNomeFilme] = useState('');
  const [notaFilme, setNotaFilme] = useState('');
  const router = useRouter();

  function handleLogout() {
    logout();
    router.replace('/');
  }

  async function handleAdicionar() {
    if (!nomeFilme.trim() || !notaFilme.trim()) {
      Alert.alert("Erro", "Preencha o nome e a nota do filme.");
      return;
    }

    const nota = parseInt(notaFilme);
    if (isNaN(nota) || nota < 1 || nota > 5) {
      Alert.alert("Erro", "A nota deve ser entre 1 e 5.");
      return;
    }

    const novoFilme = { titulo: nomeFilme, nota: notaFilme };
    const novaLista = [...filmes, novoFilme];

    setFilmes(novaLista); // Atualiza a tela
    await salvarFilmes(novaLista); // Salva no Storage

    // Limpa os campos
    setNomeFilme('');
    setNotaFilme('');
  }

  useEffect(() => {
    async function carregarDados() {
      const dados = await buscarFilmes();
      setFilmes(dados);
    }
    carregarDados();
  }, []);

  function renderEstrelas(nota) {
    const n = parseInt(nota);
    const valor = n < 1 ? 1 : n > 5 ? 5 : n;
    return '⭐'.repeat(valor);
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Olá, {usuarioLogado?.nome}! 🎉</Text>
          <Text style={styles.subtitulo}>
            Logado como: {usuarioLogado?.email}
          </Text>
        </View>

        <FlatList
          data={filmes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.filmeTitulo}>{item.titulo}</Text>
              <Text>{renderEstrelas(item.nota)}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.vazio}>Nenhum filme no seu catálogo.</Text>
          }
        />

        <View style={styles.formulario}>
          <View style={styles.inputsRow}>
            <TextInput
              style={[styles.input, { flex: 3 }]}
              placeholder="Nome do filme"
              value={nomeFilme}
              onChangeText={setNomeFilme}
            />
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Nota"
              keyboardType="numeric"
              maxLength={1}
              value={notaFilme}
              onChangeText={setNotaFilme}
            />
            <TouchableOpacity style={styles.botaoAdd} onPress={handleAdicionar}>
              <Text style={styles.textoBotaoAdd}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.botaoLogout} onPress={handleLogout} activeOpacity={0.8}>
            <Text style={styles.textoBotao}>Sair da conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#f5f5f5' 
  },
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 24, 
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    alignItems: 'center', 
  },
  titulo: { 
    fontSize: 26, 
    fontWeight: 'bold', 
    marginBottom: 4, 
    textAlign: 'center', 
    color: '#1a1a1a' 
  },
  subtitulo: { 
    fontSize: 13, 
    color: '#888', 
    marginBottom: 32 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 32,
    borderLeftWidth: 4,
    borderLeftColor: '#0beb99ff',
  },
  cardTexto: { 
    fontSize: 15, 
    color: '#333', 
    lineHeight: 22 
  },
  botaoLogout: {
    backgroundColor: '#e53935',
    padding: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  formulario: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 16,
    backgroundColor: '#f5f5f5',
    width: '100%'
  },
  inputsRow: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 50,
  },
  botaoAdd: {
    backgroundColor: '#0beb99ff',
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotaoAdd: { 
    color: '#fff', 
    fontSize: 24, 
    fontWeight: 'bold' 
  },
})