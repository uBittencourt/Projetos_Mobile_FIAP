import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
export default function Sobre() {
  const router = useRouter();
  return (
        <View style={styles.container}>
            <View style={styles.foto}>
                <Text style={styles.txtFoto}>VB</Text>
            </View>

            <Text style={styles.titulo}>Vinicius Bittencourt</Text>
            <Text style={styles.subtitulo}>Engenharia de Software · 3ESPG</Text>
            {/* <Text style={styles.subtitulo}>3ESPG</Text> */}

            <View style={styles.containerTec}>
                <View style={styles.tecnologia}>
                    <Ionicons name="logo-python" size={30} color="#fff" />
                    <Text style={styles.txtTecnologia}>Python</Text>
                </View>
                <View style={styles.tecnologia}>
                    <Fontisto name="mysql" size={30} color="#fff" />
                    <Text style={styles.txtTecnologia}>SQL</Text>
                </View>
                <View style={styles.tecnologia}>
                    <AntDesign name="java" size={30} color="#fff" />
                    <Text style={styles.txtTecnologia}>Java</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => router.back()}> 
                <Text style={styles.voltar}>← Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
  container:  { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' },
  titulo:     { fontSize: 32, fontWeight: 'bold', marginBottom: 2 },
  subtitulo:     { fontSize: 22, fontWeight: '400', marginBottom: 20},
//   descricao:  { fontSize: 16, color: '#555', marginBottom: 24 },
  voltar:     { fontSize: 16, color: '#E83D84', fontWeight: '600' },
//   botao:     { backgroundColor: '#E83D84', padding: 16, borderRadius: 12 },
//   botaoTexto:{ color: '#fff', fontSize: 16, fontWeight: '600' },
  foto:      { backgroundColor: '#E83D84', borderRadius: 50, height: 100, width: 100, alignItems: 'center', justifyContent: 'center', marginBottom: 15},
  txtFoto:   { fontSize: 35, fontWeight: 'bold', color: '#fff'},
  containerTec: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10, marginBottom: 20},
  tecnologia: { gap: 5, borderRadius: 10, width: 100, height: 90, backgroundColor: '#E83D84', alignItems: 'center', justifyContent: 'center'},
  txtTecnologia: { fontSize: 18, fontWeight: 'bold', color: '#fff'}
});