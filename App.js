import React from "react";
import { useFonts } from 'expo-font';
import { LibreFranklin_700Bold, LibreFranklin_500Medium } from "@expo-google-fonts/libre-franklin";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./src/paginas/TelaInicial";
import TelaSecundaria from "./src/paginas/Tela Secundaria";
import Tarefa from "./src/paginas/Tarefa";
import NovaTarefa from "./src/paginas/NovaTarefa";
import Detalhes from "./src/paginas/Detalhes";
import EmAndamento from "./src/paginas/Anotacoes em Andamento";
import NovaEmAndamento from "./src/paginas/Nova Em Andamento";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
      LibreFranklin_700Bold,
      LibreFranklin_500Medium,
      Roboto_400Regular
    });

    if(!fontsLoaded){
      return <AppLoading/>
    }
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
          name="Tela Secundaria"
          component={TelaSecundaria}
          options={{
            headerTintColor: "#00AEEF",
          }}
        />
        <Stack.Screen
          name="Anotações em Andamento"
          component={EmAndamento}
          options={{
            headerTintColor: "#00AEEF",
          }}
        />
        <Stack.Screen
          name="Nova Em Andamento"
          component={NovaEmAndamento}
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