import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useCarrinho } from '../context/CarrinhoContext';

export default function CarrinhoScreen() {
  const { adicionar, carrinho } = useCarrinho();
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛍️ Carrinho</Text>
      <Text>🛒 Itens no carrinho: {totalItens}</Text>

      <FlatList
        data={carrinho}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.quantidade}>Qtd: {item.quantidade}</Text>
              <Text>R$ {(item.preco * item.quantidade).toFixed(2)}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text>Seu carrinho está vazio</Text>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  scrollContent: { 
    paddingHorizontal: 20,
    paddingBottom: 20 
  },
  card: { backgroundColor: '#f0f0f0', padding: 15, marginVertical: 8, borderRadius: 10 },
  nome: { fontSize: 16, fontWeight: '600' },
});