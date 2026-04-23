import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { login } = useAuth();
  const router = useRouter();

  async function handleLogin() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Preencha e-mail e senha!');
      return;
    }

    const sucesso = await login(email.trim(), senha);

    if (sucesso) {
      router.replace('/home');
    } else {
      Alert.alert('Erro', 'E-mail ou senha incorretos!');
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Bem-vindo! 👋</Text>
        <Text style={styles.subtitulo}>Faça login para continuar</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity style={styles.botao} onPress={handleLogin} activeOpacity={0.8}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/cadastro')} activeOpacity={0.7}>
          <Text style={styles.link}>Não tenho conta → Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { 
    flex: 1, 
    backgroundColor: '#f5f5f5' 
  },
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 24 
  },
  titulo: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 8, 
    textAlign: 'center', 
    color: '#1a1a1a' 
  },
  subtitulo: { 
    fontSize: 14, 
    color: '#888', 
    marginBottom: 32, 
    textAlign: 'center' 
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#1a1a1a',
  },
  botao: { 
    backgroundColor: '#0beb99ff', 
    padding: 14, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 8 
  },
  textoBotao: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  link: { 
    marginTop: 16, 
    textAlign: 'center', 
    color: '#0beb99ff', 
    fontSize: 14 
  },
});