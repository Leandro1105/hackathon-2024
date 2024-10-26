import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const Desabafo = ({ navigation }) => { // Adicione o parâmetro navigation
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
      {/* Centraliza a logo */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('./assets/logo.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Desabafo</Text>

      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="Escreva seu desabafo aqui..."
        value={desabafo}
        onChangeText={setDesabafo}
        placeholderTextColor="#000000"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar Desabafo</Text>
      </TouchableOpacity>

      {/* Botão Voltar */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.navigate('Tela1')} // Agora funciona corretamente
      >
        <Text style={[styles.buttonText, { fontWeight: 'bold' }]}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center', // Centraliza a logo horizontalmente
    marginBottom: 20, // Espaçamento abaixo da logo
  },
  logo: {
    width: 180, // Aumentado em 40% do tamanho original (100 + 40)
    height: 180, // Aumentado em 40% do tamanho original (100 + 40)
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#cdfdd3',
    padding: 20,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },
  title: {
    fontSize: 32,
    color: '#000000',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 150,
    backgroundColor: '#f4f7fe',
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#000000',
    marginBottom: 20,
    textAlignVertical: 'top', // Alinha o texto para o topo
  },
  button: {
    backgroundColor: '#00885E',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#FF5733', // Cor do botão voltar
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    width: '100%', // Ajusta a largura do botão
    alignItems: 'center',
  },
});

export default Desabafo;
