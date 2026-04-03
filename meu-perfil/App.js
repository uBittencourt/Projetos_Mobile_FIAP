import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Vinicius Bittencourt",
    bio: "Engenharia de Software - 3º ano 💻",
    frase: "O amor é o mais alto grau da inteligência humana",
    seguidores: "400",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGsgekmBZWdIA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710277158882?e=1773878400&v=beta&t=LescaP9mcU92uuB8B9sX22jrXFNZRUUNTanyuvXOtlU",
  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />

      <View style={styles.stats}>
        <Text style={styles.stat}>👥 {usuario.seguidores} seguidores</Text>
      </View>
      
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Bio */}
      <Text style={styles.bio}>{usuario.bio}</Text>
      {/* Frase */}
      <Text style={styles.bioFrase}>{usuario.frase}</Text>
      {/* Stats */}

      <View style={styles.divFrases}>
        <Text style={styles.linkTitulo}>Links para Contato</Text>
      </View>

      <View style={styles.divLink}>
          <Text style={styles.link}>Github</Text>
          <Text style={styles.linkMenor}>https://github.com/uBittencourt</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#E1306C',
    marginBottom: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    marginTop: 8,
  },
  bio: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
  },
  bioFrase: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 10,
  },
  stats: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  divFrases: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  stat: {
    color: '#fff',
    fontSize: 14,
  },
  linkTitulo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: "center"
  },
  divLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3
  },
  link: {
    color: '#fff',
    fontSize: 16,
  },
  linkMenor: {
    color: '#fff',
    fontSize: 14,
  },
});