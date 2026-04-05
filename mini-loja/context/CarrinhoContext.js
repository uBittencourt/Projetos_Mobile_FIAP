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

  function remover(id) {
    setCarrinho(prev => {
      const item = prev.find(item => item.id === id)
      if(item.quantidade > 1) {
        return prev.map(item =>
          item.id === id
          ? {...item, quantidade: item.quantidade - 1}
          : item
        );
      }
      return prev.filter(item => item.id !== id)
    });
  }

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionar, remover }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
export const useCarrinho = () => useContext(CarrinhoContext);