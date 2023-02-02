import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Lista({data}) {

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.textos}>Carro: {data.Carro}</Text>
        <Text style={style.textos}>{data.date}</Text>
      </View>
      <View style={style.div}/>
        <Text style={style.textos}>Placa: {data.Placa}</Text>
        <Text style={style.textos}>Km: {data.Km}</Text>
        <Text style={style.textos}>Ano: {data.Ano}</Text>
        <Text style={style.textos}>Serviço: {data.Serviço}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    container:{
      padding: 15,
      margin: 5,
      marginTop: 15,
      marginBottom: 15,
      borderColor: '#F4782F',
      borderWidth: 1,
      backgroundColor: '#474747',
      borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
    },
    textos:{
      color: '#bbb',
      fontSize: 18,
      margin: 8,
      fontWeight: 'bold'
    },
    header:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    div:{
      height:1,
      width:'96%',
      left: 8,
      backgroundColor: '#aaa'
    }
  })