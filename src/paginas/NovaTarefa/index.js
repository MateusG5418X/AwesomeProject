import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from '../../config/firebaseconfig.js'
import styles from "./style";

export default function NovaTarefa({navigation}, props){
    const[ descricao, setDescricao ] = useState(null)

    function addTarefa(){
        database.collection("Tarefas").add({
            descricao: descricao, 
            status: false 
        })   
        navigation.navigate("Tarefa")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
            style={styles.input}
            placeholder="Ex: estudar javascript"
            onChangeText={setDescricao}
            value={descricao}
            />
            <TouchableOpacity 
                style={styles.botaoNovaTarefa}
                onPress={()=>{
                    addTarefa()
                }}
            >     
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}