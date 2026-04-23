import { Text, View } from 'react-native';

export default function CineLog() { // <--- O 'export default' é obrigatório
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo ao CineLog!</Text>
    </View>
  );
}