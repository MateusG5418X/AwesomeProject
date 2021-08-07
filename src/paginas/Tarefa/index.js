import React, { useState, useEffect } from "react";
import {
    View, 
    Text,
    TouchableOpacity,
    FlatList
    } from "react-native"

import database from "../../config/firebaseconfig";
import {FontAwesome} from "@expo/vector-icons"
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
                       <FontAwesome
                            name="trash"
                            size={25}
                            color="#00AEEF"
                        >

                        </FontAwesome>
                        
                        </TouchableOpacity>

                        <Text
                            style={styles.DescricaoTarefa}
                            onPress={()=>
                                navigation.navigate("Detalhes",{
                                    id: item.id,
                                    descricao: item.descricao,
                                })
                            }
                        >
                        {item.descricao}  
                        </Text> 

                    </View>
                    )
                }}
            />
            
            <TouchableOpacity style  
                style={styles.botaoNovaTarefa}
                onPress={() => navigation.navigate("Nova Tarefa")}
            >
            
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
