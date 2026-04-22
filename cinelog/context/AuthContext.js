import React, { createContext, useContext, useState } from 'react';
import { salvarUsuario, buscarUsuario } from '../storage/UserStorage';

// 1. Cria o contexto (o "grupo")
const AuthContext = createContext(null);

// 2. Provider: quem "envia as mensagens para o grupo"
export function AuthProvider({ children }) {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  // Cadastra e salva o usuário no AsyncStorage
  async function cadastrar(nome, email, senha) {
    const usuario = { nome, email, senha };
    await salvarUsuario(usuario);
  }

  // Busca no AsyncStorage e valida credenciais
  async function login(email, senha) {
    const usuario = await buscarUsuario(email);
    if (usuario && usuario.senha === senha) {
      setUsuarioLogado(usuario); // coloca no estado global
      return true;
    }
    return false;
  }

  // Limpa o estado global (logout)
  function logout() {
    setUsuarioLogado(null);
  }

  return (
    <AuthContext.Provider value={{ usuarioLogado, cadastrar, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Hook personalizado para acessar o contexto em qualquer tela
export function useAuth() {
  return useContext(AuthContext);
}