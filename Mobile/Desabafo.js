import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Desabafo = () => {
  const [desabafo, setDesabafo] = useState('');

  const handleSubmit = () => {
    if (desabafo.trim() === '') {
      Alert.alert('Erro', 'Por favor, escreva algo antes de enviar.'); // Verifica se o campo está vazio
      return;
    }

    // Aqui você pode implementar a lógica para salvar ou enviar o desabafo
    Alert.alert('Sucesso', 'Desabafo enviado!'); // Simulação de envio
    setDesabafo(''); // Limpa o campo após o envio
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desabafo</Text>

      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="Escreva seu desabafo aqui..."
        value={desabafo}
        onChangeText={setDesabafo}
        placeholderTextColor="#aaaaaa"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar Desabafo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f96324',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 150,
    backgroundColor: '#ffdfa8',
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#000000',
    marginBottom: 20,
    textAlignVertical: 'top', // Alinha o texto para o topo
  },
  button: {
    backgroundColor: '#f29f84',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#555555',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Desabafo;
