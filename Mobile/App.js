import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen'; 
import Tela1 from './Tela1';
import Questoes from './Questoes';
import Questoes2 from './Questoes2'; 
import Questoes3 from './Questoes3';
import Questoes4 from './Questoes4';
import Questoes5 from './Questoes5';
import Questoes6 from './Questoes6';
import Questoes7 from './Questoes7';
import Questoes8 from './Questoes8';
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
        <Stack.Screen name="Login">
          {({ navigation }) => <LoginScreen onLogin={() => handleLogin(navigation)} />} 
        </Stack.Screen>

        {/* Telas condicionais após o login */}
        {isLoggedIn && (
          <>
            <Stack.Screen name="Tela1" component={Tela1} />
            <Stack.Screen name="Questoes" component={Questoes} />
            <Stack.Screen name="Questoes2" component={Questoes2} />
            <Stack.Screen name="Questoes3" component={Questoes3} />
            <Stack.Screen name="Questoes4" component={Questoes4} />
            <Stack.Screen name="Questoes5" component={Questoes5} />
            <Stack.Screen name="Questoes6" component={Questoes6} />
            <Stack.Screen name="Questoes7" component={Questoes7} />
            <Stack.Screen name="Questoes8" component={Questoes8} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
