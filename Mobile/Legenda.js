import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Legenda = ({ navigation }) => {
  // Exemplo de perguntas (você pode substituir por suas perguntas reais)
  const questions = [
    "",
    // Adicione mais perguntas conforme necessário
  ];

  const handleResponse = (index, response) => {
    console.log(`Question ${index} response: ${response}`);
    // Aqui você pode armazenar a resposta se necessário
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Questionário da Felicidade</Text>

      <View style={styles.cloud}>
        <Text style={styles.cloudText}>
          Responda o questionário a seguir para ganhar créditos no aplicativo e tenha acesso a recompensas e benefícios.
        </Text>
      </View>

      <View style={styles.cloud}>
        <Text style={styles.cloudText}>
          O teste funciona da seguinte forma: você responderá as perguntas a seguir escolhendo entre 6 opções. Sendo elas:
        </Text>
        <Text style={styles.optionsText}>
          1 - Discordo completamente{'\n'}
          2 - Discordo moderadamente{'\n'}
          3 - Discordo minimamente{'\n'}
          4 - Concordo minimamente{'\n'}
          5 - Concordo moderadamente{'\n'}
          6 - Concordo plenamente
        </Text>
      </View>

      {/* Modelo para visualizar as perguntas */}
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
                  // Aqui você pode adicionar a lógica de seleção se necessário
                ]}
                onPress={() => handleResponse(index, responseIndex + 1)} // Indica a questão correta
              >
                <Text style={styles.responseText}>{responseIndex + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      <View style={styles.cloud}>
        <Text style={styles.cloudText}>
          Após a conclusão do questionário você receberá créditos, mas não se preocupe, depois de finalizado, você receberá um relatório com o resultado.
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.nextButton} 
        onPress={() => navigation.navigate('Questoes')}
      >
        <Text style={styles.buttonText}>Seguir para o formulário</Text>
      </TouchableOpacity>

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
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#000000',
    marginBottom: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  cloud: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    width: '100%',
  },
  cloudText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  optionsText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
    textAlign: 'center', // Centraliza o texto das opções
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
    backgroundColor: '#FFCCCB',
  },
  responseText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#00885E',
    borderRadius: 8,
    padding: 15,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#FF5733',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


export default Legenda;
