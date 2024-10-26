import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Questoes = ({ navigation }) => {
  // Perguntas específicas
  const questions = [
    "1. Eu não me sinto particularmente satisfeito com a maneira como sou.",
    "2. Sou uma pessoa muito interessada nas outras pessoas.",
    "3. Sinto que a vida é extremamente gratificante.",
    "4. Tenho sentimentos muito afetivos em relação a quase todos."
  ];

  // Estado para armazenar as respostas
  const [responses1, setResponses1] = useState(Array(questions.length).fill(null)); // Inicializa com null

  const handleResponse = (questionIndex, response) => {
    console.log(`Question ${questionIndex} response: ${response}`);

    // Atualiza a resposta para a pergunta correspondente
    const updatedResponses1 = [...responses1];
    updatedResponses1[questionIndex] = response;
    setResponses1(updatedResponses1);
  };

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
          <Text style={styles.questionText}>Questão {index + 1}: {question}</Text>
          <View style={styles.responsesContainer}>
            {Array.from({ length: 6 }, (_, responseIndex) => (
              <TouchableOpacity
                key={responseIndex}
                style={[
                  styles.responseButton,
                  responseIndex < 3 && styles.lightRed, // Aplica a cor vermelho claro para 1 a 3
                  responses1[index] === responseIndex + 1 && styles.selectedButton // Adiciona estilo se selecionado
                ]}
                onPress={() => handleResponse(index, responseIndex + 1)} // Atualiza a resposta
              >
                <Text style={styles.responseText}>{responseIndex + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      <TouchableOpacity 
        style={styles.submitButton}
        onPress={() => {
          console.log('Respostas finais:', responses1); // Exibe as respostas no console
          navigation.navigate('Questoes2'); // Navega para Questoes2
        }}
      >
        <Text style={styles.submitButtonText}>Próximas</Text>
      </TouchableOpacity>
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
  selectedButton: {
    backgroundColor: '#FFA500', // Cor para o botão selecionado
  },
  responseText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#00885E',
    borderRadius: 8,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Questoes;
