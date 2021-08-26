import React from "react";
import { View, Image, Button, Text } from "react-native";
import iconeLivro from "../../assets/iconeLivro.png";
import styles from "./style";

import { theme } from "../../Global/styles/theme";

export default function TelaSecundaria({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={ iconeLivro } />
        <Text style={styles.title}>EstudApp</Text> 
       <View style={styles.botoes}>
        <View>
          <Button
            title="Tarefas a Fazer"
            onPress={() => navigation.navigate("Anotações")}
          />
          </View>
          <View style={styles.botao}>
          <Button
            title="Tarefas em Andamento"
            onPress={() => navigation.navigate("Anotações em Andamento")}
          />
          <View style={styles.botao}>
          <Button
            title="Tarefas Concluidas"
            onPress={() => navigation.navigate("Anotações Concluidas")}
          />
            </View> 
          </View> 
        </View>
    </View>
  );
}