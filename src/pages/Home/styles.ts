import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#444',
      padding: 24,
      justifyConten: 'center',
    },
    titulo:{
      fontSize: 35,
      color: '#F4782F',
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 10,
    },
    texto:{
        fontSize: 16,
        color: '#ddd',
        fontWeight: 'bold',
        marginBottom: 5
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
      backgroundColor: '#f1f1f1',
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
      },

    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
      },
    
    texto3:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#f1f1f1',
    }
})