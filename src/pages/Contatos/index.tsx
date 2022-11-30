import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Contatos() {
  return (
    <View style={styles.container}>
    
      <Text style={styles.titulo2}>Adicionar Contato</Text>

      <View style={styles.containerCard}>
      <TextInput 
      placeholder='Número da empresa'
      style={styles.pesquisar}
      />
      <TouchableOpacity style={styles.botao}>
        <Text>+</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}