import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Questoes3 = ({ navigation, route }) => {
  const { responses1, responses2 } = route.params; // Recebe as respostas das telas 1 e 2
  const [responses3, setresponses3] = useState({});

  const handleResponse = (questionIndex, response) => {
    console.log(`Question ${questionIndex} response: ${response}`);
    setresponses3(prevresponses3 => ({
      ...prevresponses3,
      [questionIndex]: response // Armazena a resposta no estado
    }));
  };

  // Perguntas específicas
  const questions = [
    "9. A vida é boa",
    "10. Eu não acho que o mundo seja um bom lugar para viver",
    "11. Eu me encontro, sempre sorrindo muito",
    "12. Estou bem satisfeito com tudo em minha vida"
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
                  responses3[index + 9] === responseIndex + 1 && styles.selectedButton // Adiciona estilo se selecionado
                ]}
                onPress={() => handleResponse(index + 9, responseIndex + 1)} // Indica a questão correta
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
          onPress={() => navigation.navigate('Questoes2')} // Navega para Questoes2.js
        >
          <Text style={[styles.buttonText, { fontWeight: 'bold' }]}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.nextButton} 
          onPress={() => {
            // Passa as respostas para a próxima tela
            navigation.navigate('Questoes4', { responses3 });
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
    backgroundColor: '#f4f7fe',
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

export default Questoes3;
