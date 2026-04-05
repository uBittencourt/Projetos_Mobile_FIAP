import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

export default function TarefaItem({ tarefa, onRemover, onConcluirTarefa }) {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#a5a4a5ff", true: "#74facdb6" }}
        thumbColor={tarefa.concluida ? "#00ffa2ff" : "#f4f3f4"} 
        value={tarefa.concluida} 
        onValueChange={() => onConcluirTarefa(tarefa.id)} 
      />
      <Text style={[styles.texto, tarefa.concluida && styles.tarefaConcluida]}>{tarefa.texto}</Text>
      <TouchableOpacity onPress={() => onRemover(tarefa.id)}>
        <Text style={styles.remover}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginVertical: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  texto: { 
    fontSize: 16 
  },
  remover: { 
    fontSize: 18 
  },
  tarefaConcluida: {
    textDecorationLine: 'line-through'
  }
});