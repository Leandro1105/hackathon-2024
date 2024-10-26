import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Tela1 = ({ navigation }) => {
  const handlePress = (option) => {
    if (option === 'Dashboard') {
      navigation.navigate('Dashboard'); // Navega para a tela Dashboard
    } else if (option === 'Questões') {
      navigation.navigate('Questoes'); // Navega para a tela Questoes
    }
    // Adicione mais opções aqui, se necessário
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logo.jpg')} 
        style={styles.logo} 
        resizeMode="contain"
      />

      <Text style={styles.title}>HAPPYPASS</Text>

      <View style={styles.grid}>
        {['Dashboard', 'Score', 'Questões', 'Comunidade', 'Desabafo', 'Parcerias'].map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => handlePress(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#39BFBF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  option: {
    width: '48%',
    height: 100,
    backgroundColor: '#80d5bf',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  optionText: {
    color: '#555555',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Tela1;
