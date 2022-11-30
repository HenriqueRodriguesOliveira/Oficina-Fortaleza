import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#444',
      padding: 24,
      justifyConten: 'center',
    },
    titulo:{
      fontSize: 30,
      color: '#F4782F',
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 20,
    },
    texto:{
        fontSize: 16,
        color: '#ddd',
        fontWeight: 'bold'
      },

    titulo2:{
        fontSize: 20,
        color: '#ddd',
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 10
      },      
    pesquisar:{
      height: 55,
      width: '100%',
      borderRadius: 5,
      color: '#000',
      fontSize: 16,
      paddingLeft: 8,
      marginBottom: 10,
      backgroundColor: '#aaa',
      borderColor: '#F4782F',
      borderWidth: 0.5,
      },

    card:{
        height: 40,
        padding: 10,
        borderRadius: 7,
        backgroundColor: 'transparent',
        marginTop: 25,
        flexDirection: 'column',
        marginLeft: 20,
        right: 20,
        alignItems: 'center',
        borderColor: '#F4782F',
        borderWidth: 1,
      },

    containerCard:{
        flexDirection: 'row',
        justifyContent: 'space-between'
      },

    cardTexto:{
        fontSize: 13,
        textAlign: 'center',
        color: '#fff',
      },

    lista:{
      flex:1
    }
})