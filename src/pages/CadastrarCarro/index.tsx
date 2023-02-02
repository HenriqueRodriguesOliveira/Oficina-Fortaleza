import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import {styles} from './styles';
import firebase from '../../services/firebaseConnections';
import format from 'date-fns/format';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function CadastrarCarros() {
    const [carro, setCarro] = useState('');
    const [placa, setPlaca] = useState('');
    const [km, setKm] = useState('');
    const [ano, setAno] = useState('');
    const [servico, setServico] = useState('');

    async function handleAdd(){
        let cadastro = await firebase.database().ref('Carros');
        let chave = cadastro.push().key;
        cadastro.child(chave).set({
          Carro: carro,
          Placa: placa,
          Km: km,
          Ano: ano,
          Serviço: servico,
          date: format(new Date(), 'dd/MM/yyyy'), 
        })
        setCarro('')
        setPlaca('')
        setKm('')
        setAno('')
        setServico('')
    }
    return (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.containerPlaca}>
          <Text style={styles.texto}>Carro: {carro}</Text>
          <Text style={styles.texto}>Placa: {placa}</Text>
          <Text style={styles.texto}>Km: {km}</Text>
          <Text style={styles.texto}>Ano: {ano}</Text>
          <Text style={styles.texto}>Serviços: {servico}</Text>
        </View>

        <Text style={styles.texto}>Carro</Text>
        <TextInput 
          style={styles.input}
          placeholder='Nome do veículo'
          value={carro}
          placeholderTextColor={'#aaa'}
          onChangeText={setCarro}
          autoCapitalize='characters'
        />

        <Text style={styles.texto}>Placa</Text>
        <TextInput 
          style={styles.input}
          placeholder='Placa do veículo'
          value={placa}
          placeholderTextColor={'#aaa'}
          onChangeText={setPlaca}
          autoCapitalize='characters'
        />

        <Text style={styles.texto}>Km</Text>
        <TextInput 
          style={styles.input}
          placeholder='Km do veículo'
          value={km}
          placeholderTextColor={'#aaa'}
          onChangeText={setKm}
          autoCapitalize='characters'
        />

        <Text style={styles.texto}>Ano</Text>
        <TextInput 
          style={styles.input}
          placeholder='Ano do veículo'
          value={ano}
          placeholderTextColor={'#aaa'}
          onChangeText={setAno}
          autoCapitalize='characters'
        />

        <Text style={styles.texto}>Serviço</Text>
        <TextInput 
          style={styles.input}
          placeholder='Serviços'
          placeholderTextColor={'#aaa'}
          value={servico}
          onChangeText={setServico}
          autoCapitalize='characters'
        />

        <TouchableOpacity onPress={handleAdd} style={styles.botao}>
          <Text style={styles.texto}>CADASTRAR SERVIÇO</Text>
        </TouchableOpacity>
        </ScrollView>

        </View>
  )
}