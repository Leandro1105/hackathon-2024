import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Comunidade = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={require('./assets/logo.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.title}>Comunidade</Text>

      {/* Bloco Comunidades */}
      <View style={styles.block}>
        <Text style={styles.subtitle}>Comunidades</Text>
        <Text style={styles.description}>Acesse e gerencie comunidades</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Orgaos')}
        >
          <Text style={styles.buttonText}>Ir para Comunidades</Text>
        </TouchableOpacity>
      </View>

      {/* Bloco Eventos */}
      <View style={styles.block}>
        <Text style={styles.subtitle}>Eventos</Text>
        <Text style={styles.description}>Acesse e gerencie eventos</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Eventos')}
        >
          <Text style={styles.buttonText}>Ir para Eventos</Text>
        </TouchableOpacity>
      </View>

      {/* Botão Voltar */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.navigate('Tela1')}
      >
        <Text style={[styles.buttonText, { fontWeight: 'bold' }]}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cdfdd3',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 20, // Espaço entre a logo e o título
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  block: {
    backgroundColor: '#f4f7fe',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20, // Espaço entre os blocos
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 15, // Espaço entre o texto e o botão
  },
  button: {
    backgroundColor: '#00885E',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#FF5733',
    borderRadius: 8,
    padding: 15,
    marginTop: 150,
    width: '100%',
    alignItems: 'center',
  },
});

export default Comunidade;
