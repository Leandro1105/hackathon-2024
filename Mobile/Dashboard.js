import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Dashboard = ({ navigation }) => { // Adicione o parâmetro navigation
  // Valores fictícios para as pontuações
  const scores = [1, 2, 2.9]; // Pontuações para 3 questionários
  const maxScore = 6; // Pontuação máxima

  // Configuração do gráfico
  const data = {
    labels: ['Ago', 'Set', 'Out'],
    datasets: [
      {
        data: scores,
        color: (opacity = 1) => `rgba(255, 87, 51, ${opacity})`, // Cor da linha
        strokeWidth: 2, // largura da linha
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/logo.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Gráfico de Pontuações</Text>

      <LineChart
        data={data}
        width={Dimensions.get('window').width - 40} // Largura do gráfico
        height={220} // Altura do gráfico
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // Intervalo do eixo Y
        chartConfig={{
          backgroundColor: '#cdfdd3',
          backgroundGradientFrom: '#000000',
          backgroundGradientTo: '#cdfdd3',
          decimalPlaces: 0, // Quantidade de casas decimais
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Cor dos textos
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Cor do rótulo
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6", // raio dos pontos
            strokeWidth: "2",
            stroke: "#fff", // cor da borda dos pontos
          },
        }}
        bezier // curva da linha
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />

      {/* Legenda Colorida */}
      <View style={styles.legend}>
        <Text style={styles.legendText}>1-2: Não Feliz</Text>
        <Text style={styles.legendText}>3-5: Moderadamente Feliz</Text>
        <Text style={styles.legendText}>5-6: Muito Feliz</Text>
      </View>
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
  logo: {
    width: 180, // Aumentado em 40% do tamanho original (100 + 40)
    height: 180, // Aumentado em 40% do tamanho original (100 + 40)
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#cdfdd3',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    color: '#000000',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  legend: {
    marginTop: 20,
    width: '100%',
  },
  legendText: {
    color: '#000000',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#FF5733',
    borderRadius: 8,
    padding: 15,
    marginTop: 120,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Dashboard;
