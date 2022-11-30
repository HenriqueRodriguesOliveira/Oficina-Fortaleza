import React, {useState} from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from '../CadastrarCarro/styles';
import firebase from '../../services/firebaseConnections';
import format from 'date-fns/format';


export function CadastrarCliente() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');

    async function handleAdd(){
        let cadastro = await firebase.database().ref('Clientes');
        let chave = cadastro.push().key;
        cadastro.child(chave).set({
          Nome: nome,
          Numero: numero,
          Rua: rua,
          NumeroCasa: numeroCasa,
          Bairro: bairro,
          date: format(new Date(), 'dd/MM/yyyy'), 
        })
        setNome('')
        setNumero('')
        setRua('')
        setBairro('')
        setNumeroCasa('')
    }
    return (
      <View style={styles.container}>
        <ScrollView>
        
        <View style={styles.containerPlaca}>
          <Text style={styles.texto}>Nome: {nome}</Text>
          <Text style={styles.texto}>Número: {numero}</Text>
          <Text style={styles.texto}>Rua: {rua}</Text>
          <Text style={styles.texto}>N*: {numeroCasa}</Text>
          <Text style={styles.texto}>Bairro: {bairro}</Text>
        </View>

        <Text style={styles.texto}>Nome completo</Text>
        <TextInput 
          style={styles.input}
          placeholder='Nome completo'
          value={nome}
          placeholderTextColor={'#aaa'}
          onChangeText={setNome}
          autoCapitalize='characters'
        />

        <Text style={styles.texto}>Número do telefone</Text>
        <TextInput 
          style={styles.input}
          placeholder='Número do telefone'
          value={numero}
          placeholderTextColor={'#aaa'}
          onChangeText={setNumero}
          autoCapitalize='characters'
        />

        <Text style={styles.texto}>Rua</Text>
        <TextInput 
          style={styles.input}
          placeholder='Rua'
          value={rua}
          placeholderTextColor={'#aaa'}
          onChangeText={setRua}
          autoCapitalize='characters'
        />

        <Text style={styles.texto}>Número da casa</Text>
        <TextInput 
          style={styles.input}
          placeholder='Número da casa'
          placeholderTextColor={'#aaa'}
          value={numeroCasa}
          onChangeText={setNumeroCasa}
          autoCapitalize='characters'
        />

        <Text style={styles.texto}>Bairro</Text>
        <TextInput 
          style={styles.input}
          placeholder='Bairro'
          value={bairro}
          placeholderTextColor={'#aaa'}
          onChangeText={setBairro}
          autoCapitalize='characters'
        />

        <TouchableOpacity style={styles.botao} onPress={handleAdd}>
          <Text style={styles.texto}>CADASTRAR CLIENTE</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
  )
}