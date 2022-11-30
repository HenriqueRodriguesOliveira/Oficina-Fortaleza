import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, TextInput, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';
import firebase from '../../services/firebaseConnections';
import Listagem from './listagem';

export function Home() {
  const navigation = useNavigation();
  const [lista, setLista] = useState([]);

  useEffect(()=> {
    async function dados(){
      await firebase.database().ref('Carros').limitToLast(5).on('value', (snapshot)=>{
        setLista([]);

        snapshot.forEach((childItem) =>  {
          let data = {
            key: childItem.key,
            Carro: childItem.val().Carro,
            Placa: childItem.val().Placa,
            Ano: childItem.val().Ano,
            date: childItem.val().date,
            Km: childItem.val().Km,
            Serviço: childItem.val().Serviço,
          };
          setLista(oldArray => [...oldArray, data].reverse());
        })
      })
    }
    dados();
  },[]);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Oficina Fortaleza</Text>
      
      <Text style={styles.texto}>Cadastre os carros, clientes e serviços</Text>
      <TextInput 
      placeholder='Pesquisar placa do veículo'
      style={styles.pesquisar}
      />
      
      
      <View style={styles.containerCard}>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      >
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Cadastrar')}>
          <Text style={styles.cardTexto}>Cadastro de Veículos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Cadastrar Cliente')}>
          <Text style={styles.cardTexto}>Cadastro de Clientes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Clientes Cadastrados')}>
          <Text style={styles.cardTexto}>Clientes cadastrados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Contatos')}>
          <Text style={styles.cardTexto}>Contatos</Text>
        </TouchableOpacity>
        </ScrollView>

      </View>

      <Text style={styles.titulo2}>Serviços Registrados</Text>

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