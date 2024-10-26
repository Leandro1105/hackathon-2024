import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Resultado = ({ navigation }) => {
  // Resultado fixo
  const finalScore = '2,9'; // Valor fixo para o resultado

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logo.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Resultado Final</Text>
      <Text style={styles.resultText}>Pontuação Média: {finalScore}</Text>
      <Text style={styles.resultText}>Se você respondeu honestamente e obteve esse score baixo, recomendamos que procure observar seu estilo de vida e procure ajuda profissional para compreender melhor esses sentimentos e estabelecer uma avaliação mais apurada desse momento.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate('Tela1')} // Navega para Tela1.js
        >
          <Text style={[styles.buttonText, { fontWeight: 'bold' }]}>Voltar</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#000000',
    marginBottom: 20,
    marginTop: 100,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 20,
    color: '#000000', // Cor do texto do resultado
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#FF5733',
    borderRadius: 8,
    padding: 15,
    width: '100%', // Ajusta a largura do botão de voltar
    alignItems: 'center',
    marginTop: 220,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Resultado;
