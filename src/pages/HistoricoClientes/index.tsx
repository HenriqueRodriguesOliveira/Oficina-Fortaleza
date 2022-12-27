import React, { useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native';
import {styles} from '../Home/styles';
import firebase from '../../services/firebaseConnections';
import Listagem from './listagem';

export function HistoricoClientes() {
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);


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
          setLoading(false);
        })
      })
    }
    dados();
  },[]);
  return (
    <View style={styles.container}>

      <View style={styles.lista}>
      {loading ? <ActivityIndicator size="large" color="#842" style={{top: 200}}/> :
      <FlatList 
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.key}
        data={lista}
        renderItem={({item}) => ( <Listagem data={item} />)} />
      }
      </View>
      
    </View>
  )
}