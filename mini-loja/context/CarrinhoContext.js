import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();
export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionar(produto) {
    setCarrinho(prev => {
      const itemExiste = prev.find(item => item.id === produto.id);
      if(itemExiste) {
        return prev.map(item =>
          item.id === produto.id
          ? {...item, quantidade: item.quantidade + 1}
          : item
        );
      }
      return [...prev, {...produto, quantidade: 1}];
    });
  }
  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionar }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
export const useCarrinho = () => useContext(CarrinhoContext);