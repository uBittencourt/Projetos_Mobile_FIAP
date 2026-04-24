import { useEffect, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  Alert, StyleSheet, KeyboardAvoidingView, Platform
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [erros, setErros] = useState({});
  const [formValido, setFormValido] = useState(false);

  useEffect(() => {
    const e = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome.length > 0 && nome.trim().length < 3) e.nome = 'Nome muito curto';
    if (email.length > 0 && !emailRegex.test(email)) e.email = 'E-mail inválido';
    if (senha.length > 0 && senha.length < 6) e.senha = 'Mínimo 6 caracteres';
    if (confirmaSenha.length > 0 && senha !== confirmaSenha) e.confirmaSenha = 'As senhas não conferem';

    setErros(e);

    const tudoPreenchido = nome && email && senha && confirmaSenha;
    const semErros = Object.keys(e).length === 0;

    setFormValido(tudoPreenchido && semErros);
  }, [nome, email, senha, confirmaSenha]);

  const handleLogin = () => {
    if (formValido) {
      Alert.alert('Login realizado!', `Bem-vindo, ${nome}! 🎉`);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.titulo}>🔐 Login</Text>

      <TextInput
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
        autoCapitalize="none"
        style={styles.input}
      />
      {erros.nome && <Text style={styles.erro}>{erros.nome}</Text>}

      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      {erros.email && <Text style={styles.erro}>{erros.email}</Text>}
      
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        style={styles.input}
      /> 
      {erros.senha && <Text style={styles.erro}>{erros.senha}</Text>}
      
      <View style={styles.senhaContainer}>
        <TextInput
          placeholder="Confirmar Senha"
          value={confirmaSenha}
          onChangeText={setConfirmaSenha}
          secureTextEntry={!senhaVisivel}
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
        />
        <Text
          onPress={() => setSenhaVisivel(!senhaVisivel)}
          style={styles.olho}
        >
          {senhaVisivel ? '🙈' : '👁️'}
        </Text>
      </View>
      {erros.confirmaSenha && <Text style={styles.erro}>{erros.confirmaSenha}</Text>}
      
      <TouchableOpacity 
        style={[
          styles.botao,
          formValido ? styles.botaoAtivo : styles.botaoInativo
        ]} 
        onPress={handleLogin}
        disabled={!formValido}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    padding: 24, 
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 32, 
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 32, 
    color: '#333',
  },
  input: {
    backgroundColor: '#fff', 
    borderWidth: 1, 
    borderColor: '#ddd',
    borderRadius: 10, 
    padding: 14, 
    marginBottom: 8, 
    fontSize: 16,
  },
  senhaContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#fff', 
    borderWidth: 1, 
    borderColor: '#ddd',
    borderRadius: 10, 
    marginBottom: 8,
  },
  olho: { 
    padding: 14, 
    fontSize: 20 
  },
  erro: { 
    color: 'red', 
    marginBottom: 8, 
    marginLeft: 4 
  },
  botao: {
    borderRadius: 10,
    padding: 16, 
    marginTop: 16, 
    alignItems: 'center',
  },
  botaoInativo: { 
    backgroundColor: '#ccc' 
  },
  botaoAtivo: { 
    backgroundColor: '#0beb99'
  },
  botaoTexto: { 
    color: '#fff', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});