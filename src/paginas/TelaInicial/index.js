import React from "react";
import { View, Image, Button } from "react-native";
import iconeLivro from "../../assets/iconeLivro.png";


export default function TelaInicial({ navigation }) {
  return (
    <View>
        <Image source={
            iconeLivro
        }
    />
    <Button
    title="Visualize Suas Anotações"
    onPress={() => navigation.navigate("Anotações")}
    />
    <Button
    title="adicionar nova Anotações"
    onPress={() => navigation.navigate("Nova Anotação")}
    />
    </View>  
  );
}