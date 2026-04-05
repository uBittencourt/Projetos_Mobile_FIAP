import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useCarrinho } from '../context/CarrinhoContext';

export default function CarrinhoScreen() {
  const { adicionar, remover, carrinho } = useCarrinho();
  const totalGeral = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>

      <FlatList
        data={carrinho}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.precoItem}>R$ {(item.preco * item.quantidade).toFixed(2)}</Text>
            </View>

            <View style={styles.botoesContainer}>
              <TouchableOpacity 
                style={[styles.botao, styles.botaoRemover]} 
                onPress={() => remover(item.id)}
              >
                <Text style={styles.textoBotao}>-</Text>
              </TouchableOpacity>
              
              <Text>{item.quantidade}</Text>
              
              <TouchableOpacity 
                style={[styles.botao, styles.botaoAdicionar]} 
                onPress={() => adicionar(item)}
              >
                <Text style={styles.textoBotao}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.vazioContainer}>
            <Text style={styles.textoVazio}>Seu carrinho está vazio</Text>
          </View>
        }
      />

      {carrinho.length > 0 && (
        <View style={styles.footer}>
          <View>
            <Text style={styles.textoVazio}>Total do Pedido:</Text>
            <Text style={styles.precoItem}>R$ {totalGeral.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.botaoFinalizar} >
            <Text style={styles.textoVazio}>Finalizar Pedido</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  );
}
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    paddingTop: 60 
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0', 
    padding: 15, 
    marginVertical: 8, 
    borderRadius: 10 
  },
  nome: { 
    fontSize: 16, 
    fontWeight: '600' 
  },
  precoItem: {
    fontStyle: 'italic'
  },
  botoesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  botao: {
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'    
  },
  botaoAdicionar: {
    backgroundColor: '#0beb99ff',
  },
  botaoRemover: {
    backgroundColor: '#d1d3d2ff',
  },
  vazioContainer: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 7
  },
  textoVazio: {
    fontWeight: '500'
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10
  },
  botaoFinalizar: {
    backgroundColor: '#0beb99ff',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10
  }
});