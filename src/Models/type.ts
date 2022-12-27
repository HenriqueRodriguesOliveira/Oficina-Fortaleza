import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";

export type propsNavigationStack = {
  Home: undefined
  CadastrarCarros: {
    name: string
  }
  CadastrarCliente: {
    name: string
  }
  ClientesCadastrados: {
    name: string
  }
  
  Contatos: undefined

  HistoricoClientes: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>