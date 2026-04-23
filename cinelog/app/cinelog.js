import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function CineLog() {
  const { usuarioLogado, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.replace('/');
  }

  function renderEstrelas(nota) {
    const n = parseInt(nota);
    const valor = n < 1 ? 1 : n > 5 ? 5 : n;
    return '⭐'.repeat(valor);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao CineLog!</Text>

      <TouchableOpacity style={styles.botaoLogout} onPress={handleLogout} activeOpacity={0.8}>
        <Text style={styles.textoBotao}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

})