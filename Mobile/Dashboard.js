import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

const Dashboard = () => {
  const handleBackPress = () => {
    Alert.alert('Ação', 'Botão de voltar pressionado!'); // Lógica para voltar à tela anterior
    // Aqui você pode implementar a lógica de navegação se necessário
  };

  const handlePress = () => {
    Alert.alert('Ação', 'Botão clicado!'); // Exemplo de ação ao pressionar um botão
  };

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Image source={require('./assets/back.png')} style={styles.backImage} />
      </TouchableOpacity>

      <Text style={styles.title}>Dashboard</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Resumo de Atividades</Text>
        <Text style={styles.cardContent}>Aqui você pode ver um resumo das suas atividades diárias.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Estatísticas</Text>
        <Text style={styles.cardContent}>Acompanhe suas estatísticas de desempenho aqui.</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ação 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ação 2</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f96324',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40, // Distância do topo
    left: 20, // Distância da esquerda
    zIndex: 1, // Garante que o botão fique acima de outros componentes
  },
  backImage: {
    width: 30, // Ajuste conforme necessário
    height: 30, // Ajuste conforme necessário
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffdfa8',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#f29f84',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#555555',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Dashboard;
