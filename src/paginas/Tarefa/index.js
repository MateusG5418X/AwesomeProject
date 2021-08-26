import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import { ListDivider } from "../../components/ListDivider";

import database from "../../config/firebaseconfig";
import Botao from "./Botao";
import styles from "./style";

export default function Tarefa({ navigation }) {
  const [tarefa, setTarefa] = useState([]);

  function apagarTarefa(id) {
    database.collection("Tarefas").doc(id).delete();
  }

  useEffect(() => {
    database.collection("Tarefas").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTarefa(list);
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
      <Text style={styles.title}>Tarefas a Fazer</Text>
      <ListDivider/>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tarefa}
        renderItem={({ item }) => {
          return (
            <View style={styles.Tarefas}>
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
        onPress={() => navigation.navigate("Nova Anotação")}
      />
    </View>
  );
}