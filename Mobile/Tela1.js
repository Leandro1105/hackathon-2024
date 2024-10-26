import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Tela1 = ({ navigation }) => {
  const handlePress = (option) => {
    if (option === 'Dashboard') {
      navigation.navigate('Dashboard');
    } else if (option === 'Formulário') {
      navigation.navigate('Legenda');
    } else if (option === 'Atividades') {
      navigation.navigate('Desabafo');
    } else if (option === 'Social') {
      navigation.navigate('Comunidade');
    } else if (option === 'Benefícios') {
      navigation.navigate('Score');
    } else if (option === 'Sair') {
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logo.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />

      <Text style={styles.title}> Menu Principal </Text>

      <View style={styles.grid}>
        {['Dashboard', 'Formulário', 'Atividades', 'Social', 'Benefícios', 'Sair'].map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => handlePress(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
            {option === 'Dashboard' && (
              <Image source={require('./assets/dashboard.png')} style={styles.menuIcons} resizeMode="contain" />
            )}
            {option === 'Formulário' && (
              <Image source={require('./assets/formulario.png')} style={styles.menuIcons} resizeMode="contain" />
            )}
            {option === 'Atividades' && (
              <Image source={require('./assets/atividades.png')} style={styles.menuIcons} resizeMode="contain" />
            )}
            {option === 'Social' && (
              <Image source={require('./assets/amizade.png')} style={styles.menuIcons} resizeMode="contain" />
            )}
            {option === 'Benefícios' && (
              <Image source={require('./assets/beneficios.png')} style={styles.menuIcons} resizeMode="contain" />
            )}
            {option === 'Sair' && (
              <Image source={require('./assets/exit.png')} style={styles.menuIcons} resizeMode="contain" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuIcons: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#cdfdd3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    color: '#000000',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  option: {
    width: '48%',
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  optionText: {
    color: '#555555',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Tela1;
