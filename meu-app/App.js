import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function App() {

  const [copos, setCopos] = useState(0);
  const [meta, setMeta] = useState(8);
  const [mensagem, setMensagem] = useState('');
  const [countCopos, setCountCopos] = useState('');
  const [container, setContainer] = useState('#0f0f0f');

  useEffect(() => {
    if (copos >= meta) {
      setMensagem('🏆 Meta do dia atingida!');
      setContainer('#00ffa2ff');
    };
    if (copos < meta) {
      setMensagem(`${meta - copos} copos até a meta!`);
      setContainer('#0f0f0f');
    };
  }, [copos]);

  return (
    <View style={[styles.baseContainer, { backgroundColor: container}]}>

      <Text style={styles.msgCount}>{countCopos}</Text>
      <Text style={styles.msg}>{mensagem}</Text>
      <Text style={styles.counter}>{copos}</Text>

      <TouchableOpacity style={styles.btn} onPress={() => {setCopos(copos + 1); setCountCopos(countCopos + '🥤')}}>
        <Text style={styles.btnText}> + </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => {setCopos(0); setCountCopos('')}}>
        <Text style={styles.btnText}>Resetar Contagem</Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  baseContainer: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  msg: { 
    color: '#fff', 
    fontSize: 18, 
    marginBottom: 12 
  },
  msgCount: { 
    color: '#fff', 
    fontSize: 24, 
    marginBottom: 12,
    textAlign: 'center'
  },
  counter: { 
    color: '#fff', 
    fontSize: 72, 
    fontWeight: 'bold' 
  },
  btn: { 
    marginTop: 24, 
    backgroundColor: '#09c781ff', 
    paddingHorizontal: 40, 
    paddingVertical: 16, 
    borderRadius: 50 
  },
  btnText: { 
    color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
});