import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen'; 
import Tela1 from './Tela1';
import Legenda from './Legenda';
import Questoes from './Questoes';
import Questoes2 from './Questoes2'; 
import Questoes3 from './Questoes3';
import Questoes4 from './Questoes4';
import Questoes5 from './Questoes5';
import Questoes6 from './Questoes6';
import Questoes7 from './Questoes7';
import Questoes8 from './Questoes8';
import Resultado from './Resultado'
import Desabafo from './Desabafo'
import Dashboard from './Dashboard'
import Score from './Score'
import Comunidade from './Comunidade'
import { useState } from 'react';

const Stack = createNativeStackNavigator(); // Cria o stack navigator

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Inicializa o estado de login

  const handleLogin = (navigation) => {
    setIsLoggedIn(true); // Atualiza o estado para logado
    navigation.navigate('Tela1'); // Navega para a Tela1 após o login
  };

  return (
  <NavigationContainer>
    <Stack.Navigator>
      {/* Tela de Login */}
      <Stack.Screen 
        name="Login" 
        options={{ headerShown: false }} // Isso oculta a faixa branca de cabeçalho
      >
      
        {({ navigation }) => <LoginScreen onLogin={() => handleLogin(navigation)} />} 
      </Stack.Screen>

      {/* Telas condicionais após o login */}
      {isLoggedIn && (
        <>
          <Stack.Screen name="LoginScreen" options={{ headerShown: false }} component={LoginScreen} />
          <Stack.Screen name="Tela1" options={{ headerShown: false }} component={Tela1} />
          <Stack.Screen name="Legenda" options={{ headerShown: false }} component={Legenda} />
          <Stack.Screen name="Questoes" options={{ headerShown: false }} component={Questoes} />
          <Stack.Screen name="Questoes2" options={{ headerShown: false }} component={Questoes2} />
          <Stack.Screen name="Questoes3" options={{ headerShown: false }} component={Questoes3} />
          <Stack.Screen name="Questoes4" options={{ headerShown: false }} component={Questoes4} />
          <Stack.Screen name="Questoes5" options={{ headerShown: false }} component={Questoes5} />
          <Stack.Screen name="Questoes6" options={{ headerShown: false }} component={Questoes6} />
          <Stack.Screen name="Questoes7" options={{ headerShown: false }} component={Questoes7} />
          <Stack.Screen name="Questoes8" options={{ headerShown: false }} component={Questoes8} />
          <Stack.Screen name="Resultado" options={{ headerShown: false }} component={Resultado} />
          <Stack.Screen name="Desabafo" options={{ headerShown: false }} component={Desabafo} />
          <Stack.Screen name="Dashboard" options={{ headerShown: false }} component={Dashboard} />
          <Stack.Screen name="Score" options={{ headerShown: false }} component={Score} />
          <Stack.Screen name="Comunidade" options={{ headerShown: false }} component={Comunidade} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
);

}
