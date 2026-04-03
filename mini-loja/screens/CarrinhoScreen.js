import { View, Text, FlatList, Button, StyleSheet, ScrollView } from 'react-native';
import { useCarrinho } from '../context/CarrinhoContext';

export default function CarrinhoScreen() {
    const { adicionar, carrinho } = useCarrinho();
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>🛍️ Carrinho</Text>
            <Text>🛒 Itens no carrinho: {carrinho.length}</Text>

            <ScrollView 
                contentContainerStyle={styles.scrollContent} 
                showsVerticalScrollIndicator={false}
            >
                {carrinho.map((produto) => {
                    return (
                        <View>
                            <Text style={styles.nome}>{produto.nome}</Text>
                        </View>
                    )
                })}
            </ScrollView>

            {/* <FlatList
                data={carrinho}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.nome}>{item.nome}</Text>
                        <Text>R$ {item.preco.toFixed(2)}</Text>
                    </View>
                )}
            /> */}
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