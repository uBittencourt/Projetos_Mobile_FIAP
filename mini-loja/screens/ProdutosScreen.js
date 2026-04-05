import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { produtos } from '../data/produtos';
import { useCarrinho } from '../context/CarrinhoContext';

export default function ProdutosScreen() {
  const { adicionar, carrinho } = useCarrinho();
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛍️ Produtos</Text>
      <Text>🛒 Itens no carrinho: {totalItens}</Text>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardDesc}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.precoItem}>R$ {item.preco.toFixed(2)}</Text>
            </View>
            <Button title="Adicionar ao Carrinho" onPress={() => adicionar(item)} />
          </View>
        )}
      />
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
    backgroundColor: '#f0f0f0', 
    padding: 15, 
    marginVertical: 8, 
    borderRadius: 10 
  },
  cardDesc: {
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#945555ff'
  },
  precoItem: {
    fontStyle: 'italic'
  },
  nome: { 
    fontSize: 16, 
    fontWeight: '600' 
  },
});