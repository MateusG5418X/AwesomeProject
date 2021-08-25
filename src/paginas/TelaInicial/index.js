import React from "react";
import { View, Image, Button, Text } from "react-native";
import iconeLivro from "../../assets/iconeLivro.png";
import styles from "./style";

import { theme } from "../../Global/styles/theme";

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={ iconeLivro } />
        <Text style={styles.title}>EstudApp</Text> 
       <View style={styles.botoes}>
        <View>
          <Button
            title="Visualize Suas Anotações"
            onPress={() => navigation.navigate("Anotações em Andamento")}
          />
          </View>
          <View style={styles.botao}>
          <Button
            title="Adicionar Nova Anotação"
            onPress={() => navigation.navigate("Nova Anotação")}
          />
          </View> 
        </View>
    </View>
  );
}