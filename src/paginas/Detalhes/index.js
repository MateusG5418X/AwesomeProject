import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import database from "../../config/firebaseconfig.js";
import styles from "./style";
import Botao from "../Tarefa/Botao.js";

export default function Detalhes({ navigation, route }) {
  const [editarTitulo, seteditarTitulo] = useState(route.params.titulo);
  const [editarDescricao, seteditarDescricao] = useState(
    route.params.descricao
  );
  const idTarefa = route.params.id;

  function editarTarefa(titulo, descricao, id) {
    database.collection("Tarefas").doc(id).update({
      titulo: titulo,
      descricao: descricao,
    });
    navigation.navigate("Anotações");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={seteditarTitulo}
        value={editarTitulo}
      />
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Ver as aulas"
        onChangeText={seteditarDescricao}
        value={editarDescricao}
      />
      <Botao
        antIconName="check"
        style={{
          backgroundColor: "#00AEEF",
          position: "absolute",
          right: 15,
          bottom: 50,
          zIndex: 1,
        }}
        onPress={() => editarTarefa(editarTitulo, editarDescricao, idTarefa)}
      />
    </View>
  );
}