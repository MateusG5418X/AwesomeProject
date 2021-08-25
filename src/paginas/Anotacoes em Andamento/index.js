import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Alert } from "react-native";

import database from "../../config/firebaseconfig";
import Botao from "../Tarefa/Botao";
import styles from "./style";

export default function EmAndamento({ navigation }) {
  const [EmAndamento, setEmAndamento] = useState([]);

  function apagarTarefa(id) {
    database.collection("Em Andamento").doc(id).delete();
  }

  useEffect(() => {
    database.collection("Em Andamento").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setEmAndamento(list);
    });
  }, []);

  /*const displayDeleteAlert = () => {
    Alert.alert(
      "Você tem certeza?",
      "Essa anotação será excluída permanentemente",
      [
        {
          text: "Excluir",
          onPress: apagarTarefa,
        },
        {
          text: "Cancelar",
          onPress: () => console.log("cancelar"),
        },
      ],
      {
        cancelable: true,
      }
    );
  };*/

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={EmAndamento}
        renderItem={({ item }) => {
          return (
            <View style={styles.EmAndamento}>
              <Botao
                antIconName="delete"
                style={{ backgroundColor: "#ff0000", marginBottom: 5 }}
                onPress={() => apagarTarefa(item.id)}
                //onPress={displayDeleteAlert}
              />

              <Text
                style={styles.DescricaoTarefa}
                onPress={() =>
                  navigation.navigate("Detalhes", {
                    id: item.id,
                    titulo: item.titulo,
                    descricao: item.descricao,
                  })
                }
              >
                {item.titulo}
              </Text>
            </View>
          );
        }}
      />

      <Botao
        antIconName="plus"
        style={{
          backgroundColor: "#00AEEF",
          position: "absolute",
          right: 15,
          bottom: 50,
          zIndex: 1,
        }}
        onPress={() => navigation.navigate("Nova Em Andamento")}
      />
    </View>
  );
}