import React from 'react';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from './src/Models/type';


import { Home } from './src/pages/Home';
import { CadastrarCarros } from './src/pages/CadastrarCarro';
import { CadastrarCliente } from './src/pages/CadastrarCliente';
import { HistoricoClientes } from './src/pages/HistoricoClientes';

const Stack = createNativeStackNavigator<propsNavigationStack>();

export default function App(){
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>

      <Stack.Screen name="CadastrarCarros" component={CadastrarCarros} options={{headerStyle: {
            backgroundColor: '#444',
          },
          headerTintColor: '#F4782F',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, title: 'Cadastrar carros'}}/>

      <Stack.Screen name="CadastrarCliente" component={CadastrarCliente} options={{headerStyle: {
            backgroundColor: '#444',
          },
          headerTintColor: '#F4782F',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, title: 'Cadastrar clientes'}}/>
      
      <Stack.Screen name="ClientesCadastrados" component={HistoricoClientes} options={{headerStyle: {
            backgroundColor: '#444',
          },
          headerTintColor: '#F4782F',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, title: 'Clientes cadastrados'}}/>
    </Stack.Navigator>
    </NavigationContainer>
);
}

