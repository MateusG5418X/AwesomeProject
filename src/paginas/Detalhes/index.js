import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity}  from "react-native"

import database from "../../config/firebaseconfig.js"
import styles from "./style"

export default function Detalhes({navigation, route}){
    const [editarDescricao, seteditarDescricao] = useState(route.params.descricao)
    const idTarefa = route.params.id
 
    function editarTarefa(descricao, id){
        database.collection("Tarefas").doc(id).update({
            descricao: descricao,
        })
        navigation.navigate("Tarefa")
    }

    return (
    <View style={styles.container}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={seteditarDescricao}
        value={editarDescricao}
        />
        <TouchableOpacity 
            style={styles.botaoNovaTarefa}
            onPress={()=>{
                editarTarefa(editarDescricao, idTarefa)
            }}
        >     
            <Text style={styles.iconButton}>Salvar</Text>
        </TouchableOpacity>
    </View>
    )
}