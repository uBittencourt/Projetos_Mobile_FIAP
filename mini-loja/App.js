import { View } from 'react-native';
import { CarrinhoProvider } from './context/CarrinhoContext';
import ProdutosScreen from './screens/ProdutosScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';
export default function App() {
  return (
    <CarrinhoProvider>
      {/* <ProdutosScreen /> */}
      <CarrinhoScreen />
    </CarrinhoProvider>
  );
}