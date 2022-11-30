import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, TextInput, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from '../Home/styles';
import firebase from '../../services/firebaseConnections';
import Listagem from './listagem';

export function HistoricoClientes() {
  const navigation = useNavigation();
  const [lista, setLista] = useState([]);

  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('Clientes').limitToLast(5).on('value', (snapshot)=>{
        setLista([]);

        snapshot.forEach((childItem) =>  {
          let data = {
            key: childItem.key,
            Nome: childItem.val().Nome,
            Numero: childItem.val().Numero,
            Rua: childItem.val().Rua,
            NumeroCasa: childItem.val().NumeroCasa,
            Bairro: childItem.val().Bairro,
            date: childItem.val().date,
          };
          setLista(oldArray => [...oldArray, data].reverse());
        })
      })
    }
    dados();
  },[]);
  return (
    <View style={styles.container}>

      <View style={styles.lista}>
      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.key}
        data={lista}
        renderItem={({item}) => ( <Listagem data={item} />)} />
      </View>
      
    </View>
  )
}