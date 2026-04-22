import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { usuarioLogado, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.replace('/');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, {usuarioLogado?.nome}! 🎉</Text>
      <Text style={styles.subtitulo}>
        Logado como: {usuarioLogado?.email}
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTexto}>
          Você está na área protegida do app.{'\n'}
          Só usuários autenticados chegam aqui! 🔐
        </Text>
      </View>

      <TouchableOpacity style={styles.botaoLogout} onPress={handleLogout} activeOpacity={0.8}>
        <Text style={styles.textoBotao}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 26, fontWeight: 'bold', marginBottom: 4, textAlign: 'center', color: '#1a1a1a' },
  subtitulo: { fontSize: 13, color: '#888', marginBottom: 32 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 32,
    borderLeftWidth: 4,
    borderLeftColor: '#6200ea',
  },
  cardTexto: { fontSize: 15, color: '#333', lineHeight: 22 },
  botaoLogout: {
    backgroundColor: '#e53935',
    padding: 14,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});