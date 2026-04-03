import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // NATIVAMENTE POR PADRÃO TEM QUE ACESSAR APP/INDEX.JS
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <View style={styles.foto}>
            <Text style={styles.txtFoto}>VB</Text>
        </View>

        <Text style={styles.titulo}>Vinicius Bittencourt</Text>
        <TouchableOpacity style={styles.botao} onPress={() => router.push('/perfil')}>
            <Text style={styles.botaoTexto}>Ver meu perfil</Text>
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' },
  titulo:    { fontSize: 32, fontWeight: 'bold', marginBottom: 24 },
  botao:     { backgroundColor: '#E83D84', padding: 16, borderRadius: 12 },
  botaoTexto:{ color: '#fff', fontSize: 16, fontWeight: '600' },
  foto:      { backgroundColor: '#E83D84', borderRadius: 50, height: 100, width: 100, alignItems: 'center', justifyContent: 'center', marginBottom: 15},
  txtFoto:   { fontSize: 35, fontWeight: 'bold', color: '#fff'}
});