import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Score = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logo.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}> Pontos </Text>
      {/* Nuvem de Texto 1 - Créditos Acumulados */}
      <View style={styles.textCloud}>
        <View style={styles.centeredContent}>
          <Text style={styles.creditText}>
            <Text style={styles.boldText}>Créditos acumulados:</Text>
          </Text>
          <Text style={styles.creditValue}>
            142 créditos     
            <Image 
              source={require('./assets/moeda.png')} 
              style={styles.moedaIcon}  // Usando o estilo definido para a moeda
              resizeMode="contain"
            />
          </Text>
        </View>
      </View>

      {/* Nuvem de Texto 2 - Descontos */}
      <View style={styles.textCloud}>
        <View style={styles.centeredContent}>
          <Text style={[styles.title, styles.boldText]}>Benefícios</Text>
        </View>
        <Text style={[styles.subtitle, styles.boldText]}>Médicos</Text>
        
        {/* Lista com endereços e links */}
        <TouchableOpacity onPress={() => navigation.navigate('Endereco1')}>
          <Text style={styles.listItem}>Daniel Ferreira Alves - Rua A, 123 - Franca, SP</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Endereco2')}>
          <Text style={styles.listItem}>Marcela Lima Figueiredo - Avenida B, 456 - Franca, SP</Text>
        </TouchableOpacity>

        <View style={styles.centeredContent}>
          <Text style={[styles.title, styles.boldText]}>Descontos</Text>
        </View>

        <Text style={[styles.subtitle, styles.boldText]}>Estabelecimentos</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Endereco1')}>
          <Text style={styles.listItem}>Teatro Municipal de Franca, Av. Santa Cruz, 2870</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate('Endereco2')}>
          <Text style={styles.listItem}>Academia Smartfit, Rua Voluntários da Franca, 1875</Text>
        </TouchableOpacity>
        <Text style={styles.listItem}> </Text>
      </View>
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
  logo: {
    width: '100%', // Aumentado em 40% do tamanho original (100 + 40)
    height: 100, // Aumentado em 40% do tamanho original (100 + 40)
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#cdfdd3',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alterado para 'flex-start' para mover a nuvem para cima
    padding: 20,
  },
  textCloud: {
    backgroundColor: '#f4f7fe',
    borderRadius: 10,
    padding: 5,
    marginBottom: 5, // Aumentado para maior espaçamento entre as nuvens
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Para Android
    marginTop: 30,
  },
  centeredContent: {
    alignItems: 'center', // Centraliza verticalmente
  },
  creditText: {
    fontSize: 50,
    color: '#333333',
    textAlign: 'center', // Centraliza o texto
  },
  creditValue: {
    flexDirection: 'row', // Mantém o texto e a moeda na mesma linha
    alignItems: 'center', // Alinha verticalmente o texto e o ícone
    justifyContent: 'center', // Centraliza horizontalmente
    fontSize: 30,
    color: '#333333',
  },
  boldText: {
    fontWeight: 'bold',
    marginTop: 15,
  },
  title: {
    fontSize: 32,
    color: '#000000',
    marginBottom: 5,
    marginTop: 5,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
  },
  listItem: {
    fontSize: 16,
    textAlign: 'center',
    color: '#007BFF', // Cor azul para o texto do link
    textDecorationLine: 'underline', // Sublinhado para indicar que é um link
    marginTop: 5,
  },
  moedaIcon: {
    width: 50,  // Largura ajustada para 50 pixels
    height: 50, // Altura ajustada para 50 pixels
    marginLeft: 5, // Espaçamento à esquerda do ícone
  },
  backButton: {
    backgroundColor: '#FF5733', // Cor do botão voltar
    borderRadius: 8,
    padding: 15,
    marginTop: 45,
    width: '100%', // Ajusta a largura do botão
    alignItems: 'center',
  },
});

export default Score;
