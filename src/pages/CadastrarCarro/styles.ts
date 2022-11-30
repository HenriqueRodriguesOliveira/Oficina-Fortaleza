import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#444',
      padding: 24,
    },
    texto:{
      color:'#FFF',
      marginBottom: 5
    },
    input:{
        height: 55,
        width: '100%',
        borderRadius: 5,
        color: '#fff',
        fontSize: 16,
        paddingLeft: 8,
        marginBottom: 20,
        borderColor: '#F4782F',
        borderWidth: 1,
    },
    botao:{
      backgroundColor: '#F4782F',
      padding: 15,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerPlaca:{
      padding: 20,
      borderColor: '#F4782F',
      borderWidth: 2,
      borderRadius: 7,
      marginBottom: 20,
      backgroundColor: '#555'
    }
});