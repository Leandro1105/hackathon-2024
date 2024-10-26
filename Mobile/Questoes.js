import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Questoes = ({ navigation }) => {
  const [responses1, setresponses1] = useState({}); // Estado para armazenar as respostas

  const handleResponse = (questionIndex, response) => {
    console.log(`Question ${questionIndex} response: ${response}`);
    setresponses1(prevresponses1 => ({
      ...prevresponses1,
      [questionIndex]: response // Armazena a resposta no estado
    }));
  };

  // Perguntas específicas
  const questions = [
    "1. Eu não me sinto particularmente satisfeito com a maneira como sou.",
    "2. Sou uma pessoa muito interessada nas outras pessoas.",
    "3. Sinto que a vida é extremamente gratificante.",
    "4. Tenho sentimentos muito afetivos em relação a quase todos."
  ];

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logo.png')} 
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
                style={[
                  styles.responseButton,
                  responseIndex < 3 && styles.lightRed, // Aplica a cor vermelho claro para 1 a 3
                  responses1[index + 5] === responseIndex + 1 && styles.selectedButton // Adiciona estilo se selecionado
                ]}
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
          onPress={() => navigation.navigate('Legenda')} // Navega para Questoes.js
        >
          <Text style={[styles.buttonText, { fontWeight: 'bold' }]}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.nextButton} 
          onPress={() => {
            // Passa as respostas para a próxima tela
            navigation.navigate('Questoes2', { responses1 });
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
    backgroundColor: '#cdfdd3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  logo: {
    width: '100%', // Aumentado em 40% do tamanho original (100 + 40)
    height: 100, // Aumentado em 40% do tamanho original (100 + 40)
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    color: '#000000',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  questionContainer: {
    backgroundColor: '#FFFFFF',
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
  selectedButton: {
    backgroundColor: '#FFA500', // Cor para o botão selecionado
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
    backgroundColor: '#FF5733',
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

export default Questoes;
