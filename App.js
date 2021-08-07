import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tarefa from "./src/paginas/Tarefa"
import NovaTarefa from './src/paginas/NovaTarefa';
import Detalhes from './src/paginas/Detalhes';

const Stack = createStackNavigator()

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Tarefa">
      <Stack.Screen
      name="Tarefa"
      component={Tarefa}
      options = {{
        headerTintColor:"#00AEEF"
      }}
      />
      <Stack.Screen
      name="Nova Tarefa"
      component={NovaTarefa}
      options = {{
        headerTintColor:"#00AEEF"
      }}
      />
      <Stack.Screen
      name="Detalhes"
      component={Detalhes}
      options = {{
        headerTintColor:"#00AEEF"
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


