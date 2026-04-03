import { createContext, useContext, useState } from 'react';
const CarrinhoContext = createContext();
export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  function adicionar(produto) {
    setCarrinho(prev => [...prev, produto]);
  }
  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionar }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
export const useCarrinho = () => useContext(CarrinhoContext);