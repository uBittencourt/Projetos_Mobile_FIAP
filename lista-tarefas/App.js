import { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TarefaItem from './components/TarefaItem';

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState('');
  // 📖 Carregar ao abrir o app
  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    const dados = await AsyncStorage.getItem('tarefas');
    if (dados) setTarefas(JSON.parse(dados));
  };
  const salvarTarefas = async (lista) => {
    await AsyncStorage.setItem('tarefas', JSON.stringify(lista));
  };
  const adicionarTarefa = () => {
    if (!texto.trim()) return;
    const nova = { id: Date.now().toString(), texto, concluida : false };
    const novaLista = [...tarefas, nova];
    setTarefas(novaLista);
    salvarTarefas(novaLista);
    setTexto('');
  };
  const removerTarefa = (id) => {
    const novaLista = tarefas.filter((t) => t.id !== id);
    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };
  const concluirTarefa = (id) => {
    const novaLista = tarefas.map(t => 
      t.id === id ? { ...t, concluida: !t.concluida } : t
    );
    setTarefas(novaLista);
    salvarTarefas(novaLista);
  };
  const limparTarefas = () => {
    setTarefas([]);
    AsyncStorage.removeItem('tarefas');
  }

  const totalTarefas = tarefas.length;
  const concluidas = tarefas.filter(t => t.concluida).length;
  const porcentagem = totalTarefas > 0 ? (concluidas / totalTarefas) * 100 : 0;
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Tarefas</Text>

      <View style={styles.progressoContainer}>
        <View style={[styles.barraFundo]}>
          <View style={[styles.barraPreenchida, { width: `${porcentagem}%` }]} />
        </View>
        <Text style={styles.textoProgresso}>{Math.round(porcentagem)}% concluído</Text>
      </View>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TarefaItem tarefa={item} onRemover={removerTarefa} onConcluirTarefa={concluirTarefa}/>
        )}
      />

      <View style={styles.containerInteracao}>
        {tarefas.length > 0 && (
          <TouchableOpacity style={[styles.botao, styles.botaoLimpar]} onPress={limparTarefas}>
            <Text style={styles.textoBotao}>Limpar Tarefas</Text>
          </TouchableOpacity>
        )}
        <TextInput
          value={texto}
          onChangeText={setTexto}
          placeholder="Digite uma nova tarefa..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarTarefa}> 
          <Text style={styles.textoBotao}>Adicionar Tarefa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 60, 
    paddingBottom: 50,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8,
    padding: 10, 
    marginBottom: 10, 
    fontSize: 16,
    alignSelf: 'stretch'
  },
  botaoAdicionar: {
    backgroundColor: "#0beb99ff",
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
    alignSelf: 'stretch'
  },
  botaoLimpar: {
    backgroundColor: "#f0f0f0",
    width: 150,
    alignItems: 'center',
    height: 35,
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  textoBotao: {
    fontWeight: '500',
    fontSize: 16
  },
  containerInteracao: {
    alignItems: 'center',
    flexDirection: 'column'
  },
  progressoContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  barraFundo: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  barraPreenchida: {
    height: '100%',
    backgroundColor: '#0beb99ff',
  },
  textoProgresso: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
});