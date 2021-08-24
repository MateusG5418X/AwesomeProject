import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./src/paginas/TelaInicial";
import Tarefa from "./src/paginas/Tarefa";
import NovaTarefa from "./src/paginas/NovaTarefa";
import Detalhes from "./src/paginas/Detalhes";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tarefa"
      headerMode="none"
      

      >
        <Stack.Screen
          name="Tela Inicial"
          component={TelaInicial}
          options={{
            headerTintColor: "#00AEEF",
          }}
        />
        <Stack.Screen
          name="Anotações"
          component={Tarefa}
          options={{
            headerTintColor: "#00AEEF",
          }}
        />
        <Stack.Screen
          name="Nova Anotação"
          component={NovaTarefa}
          options={{
            headerTintColor: "#00AEEF",
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            headerTintColor: "#00AEEF",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}