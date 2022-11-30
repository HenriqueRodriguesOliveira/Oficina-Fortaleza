import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './src/pages/Home';
import { CadastrarCarros } from './src/pages/CadastrarCarro';
import { CadastrarCliente } from './src/pages/CadastrarCliente';
import { HistoricoClientes } from './src/pages/HistoricoClientes';
import { Contatos } from './src/pages/Contatos';

const Stack = createStackNavigator();

export default function App(){
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>

      <Stack.Screen name="Cadastrar" component={CadastrarCarros} options={{headerStyle: {
            backgroundColor: '#444',
          },
          headerTintColor: '#F4782F',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>

      <Stack.Screen name="Cadastrar Cliente" component={CadastrarCliente} options={{headerStyle: {
            backgroundColor: '#444',
          },
          headerTintColor: '#F4782F',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
      
      <Stack.Screen name="Clientes Cadastrados" component={HistoricoClientes} options={{headerStyle: {
            backgroundColor: '#444',
          },
          headerTintColor: '#F4782F',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
      
      <Stack.Screen name="Contatos" component={Contatos} options={{headerStyle: {
            backgroundColor: '#444',
          },
          headerTintColor: '#F4782F',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}/>
    </Stack.Navigator>
    </NavigationContainer>
);
}

