import React, { useState, useEffect } from "react";
import {
    View, 
    Text,
    TouchableOpacity,
    FlatList,
    Alert
    } from "react-native"

import database from "../../config/firebaseconfig";
import Botao from "./Botao";
import styles from "./style"



export default function Tarefa({ navigation }){
    const [tarefa, setTarefa] = useState ([]);

    function apagarTarefa(id){
        database.collection("Tarefas").doc(id).delete();
    }

    useEffect(() => {
        database.collection("Tarefas").onSnapshot((query)=> {
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setTarefa(list)
        })

    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={tarefa}
                renderItem={({item})=>{
                    return(
                    <View style={styles.Tarefas}>
                        <TouchableOpacity   
                            style={styles.apagarTarefa}
                            onPress={() => {
                                apagarTarefa(item.id)
                            }}
                        >
                       <Botao
                            antIconName="delete"
                            style={{ backgroundColor: "#ff0000", marginBottom: 5 }}
                            
                        />

                        </TouchableOpacity>

                        <Text
                            style={styles.DescricaoTarefa}
                            onPress={()=>
                                navigation.navigate("Detalhes",{
                                    id: item.id,
                                    titulo: item.titulo,
                                    descricao: item.descricao,
                                })
                            }
                        >
                        {item.titulo}  
                        </Text> 

                    </View>
                    )
                }}
            />
            
            <TouchableOpacity style  
                style={styles.botaoNovaTarefa}
                onPress={() => navigation.navigate("Nova Anotação")}
            >
            
            <Botao
                antIconName="plus"
                style={{ backgroundColor:"#00AEEF", position:"absolute", right:15, bottom:50, zIndex:1 }}
                            
            />
            </TouchableOpacity>
        </View>
    )
}
