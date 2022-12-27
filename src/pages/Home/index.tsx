import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, TextInput, ScrollView, ActivityIndicator, LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import {styles} from './styles';
import  { dataBase } from '../../services/firebaseConnections';
import Listagem from './listagem';
import calendario from '../../assets/calendario.png';
import { propsStack } from '../../Models/type';

LogBox.ignoreAllLogs();

export function Home() {
  const navigation = useNavigation<propsStack>();
  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(true);

  const db = dataBase;

  

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
          setLoading(false);
        })
      })
    }
    dados();
  },[]);
  return (
    <View style={styles.container}>

      <StatusBar
      style='light'
      />
      
      <Text style={styles.titulo}>Oficina Fortaleza</Text>
      
      <Text style={styles.texto}>Cadastre os carros, clientes e serviços.</Text>
      <TextInput 
      placeholder='Pesquisar as placas dos veículos.'
      style={styles.pesquisar}
      />
      
      
      <View style={styles.containerCard}>
      <ScrollView 
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      >
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CadastrarCarros', {
          name: 'carros'
        })}>
          <Text style={styles.cardTexto}>Cadastrar Veículos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('CadastrarCliente')}>
          <Text style={styles.cardTexto}>Cadastrar Clientes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ClientesCadastrados')}>
          <Text style={styles.cardTexto}>Clientes cadastrados</Text>
        </TouchableOpacity>
        </ScrollView>

      </View>

      <View style={styles.row}>
      <Text style={styles.texto3}>Serviços Registrados</Text>
      <TouchableOpacity>
        <Image source={calendario}/>
      </TouchableOpacity>
      </View>

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