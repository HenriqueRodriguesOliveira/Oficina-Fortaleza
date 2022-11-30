import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Lista({data}) {

  return (
    <View style={style.container}>
        <Text style={style.textos}>Nome: {data.Nome}</Text>
      <View style={style.div}/>
        <Text style={style.textos}>Número do telefone: {data.Numero}</Text>
        <View style={style.header}>
        <Text style={style.textos}>Rua: {data.Rua}</Text>
        <Text style={style.textos}>N*: {data.NumeroCasa}</Text>
        </View>
        <Text style={style.textos}>Bairro: {data.Bairro}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    container:{
      padding: 15,
      margin: 5,
      marginBottom: 15,
      borderColor: '#F4782F',
      borderWidth: 0.5,
      backgroundColor: '#474747',
      borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 3,
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