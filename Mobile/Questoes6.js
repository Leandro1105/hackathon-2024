import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Questoes6 = ({ navigation }) => { // Recebe a prop navigation
  const [responses6, setresponses6] = useState({}); // Estado para armazenar as respostas

  const handleResponse = (questionIndex, response) => {
    console.log(`Question ${questionIndex} response: ${response}`);
    setresponses6(prevresponses6 => ({
      ...prevresponses6,
      [questionIndex]: response // Armazena a resposta no estado
    }));
  };

  // Perguntas específicas
  const questions = [
    "21.Eu me considero uma pessoa mentalmente alerta",
    "22.Muitas vezes me sinto experimentando alegria e euforia",
    "23.Sinto que não é fácil tomar decisões, em várias situações",
    "24.Sinto não ter um significado e propósito em minha vida"
  ];

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logo.jpg')} 
        style={styles.logo} 
        resizeMode="contain"
      />

      <Text style={styles.title}>Questões</Text>

      {/* Questões */}
      {questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.questionText}>{question}</Text>
          <View style={styles.responsesContainer}>
            {Array.from({ length: 6 }, (_, responseIndex) => (
              <TouchableOpacity
                key={responseIndex}
                style={[styles.responseButton, responseIndex < 3 && styles.lightRed]} // Aplica a cor vermelho claro para 1 a 3
                onPress={() => handleResponse(index + 5, responseIndex + 1)} // Indica a questão correta
              >
                <Text style={styles.responseText}>{responseIndex + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.navigate('Questoes5')} // Navega para Questoes.js
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.nextButton} 
          onPress={() => {
            // Passa as respostas para a próxima tela
            navigation.navigate('Questoes7', { responses6 });
          }}
        >
          <Text style={styles.buttonText}>Próximas</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  questionContainer: {
    backgroundColor: '#80d5bf',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    width: '100%',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  responsesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  responseButton: {
    backgroundColor: '#00885E',
    borderRadius: 8,
    padding: 10,
    width: '15%',
    alignItems: 'center',
  },
  lightRed: {
    backgroundColor: '#FFCCCB', // Cor vermelho claro para alternativas 1 a 3
  },
  responseText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#00885E',
    borderRadius: 8,
    padding: 15,
    width: '48%', // Ajusta a largura do botão de voltar
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#00885E',
    borderRadius: 8,
    padding: 15,
    width: '48%', // Ajusta a largura do botão de próximo
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Questoes6;