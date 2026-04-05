import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CarrinhoProvider } from './context/CarrinhoContext';
import ProdutosScreen from './screens/ProdutosScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {
  const [ tela, setTela ] = useState('Produtos');
  return (
    <CarrinhoProvider>
      <View style={styles.container}>

        {tela === 'Produtos' ? <ProdutosScreen /> : <CarrinhoScreen />}
        
        <View style={styles.nav}>

          <TouchableOpacity style={styles.icon} onPress={() => setTela('Produtos')}> 
            <Ionicons 
              name="book" 
              size={24}
              color="#0beb99ff"
            />
            <Text style={styles.textIcon}>Produtos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.icon} onPress={() => setTela('Carrinho')}> 
            <Ionicons 
              name="cart" 
              size={24} 
              color="#0beb99ff"
            />
            <Text style={styles.textIcon}>Carrinho</Text>
          </TouchableOpacity>

        </View>
      </View>
    </CarrinhoProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  nav: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingBottom: 50, 
    borderTopWidth: 1,
    borderTopColor: '#e1e7f3ff'
  },
  icon: {
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIcon: {
    fontSize: 12
  }  
});