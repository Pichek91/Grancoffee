import * as React from 'react';
import { View, StyleSheet,Image,Text, TouchableOpacity, Linking, ImageBackground, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Foundation } from '@expo/vector-icons';

function linkExternal (){
  Linking.openURL('https://grancoffee.com.br/');

}


export function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
         <ImageBackground source={require('../../Image/fundo3.png')}
          style = {styles.logo} 
         >
            <TouchableOpacity style={styles.button} onPress={linkExternal}>
                <Text style={styles.buttonText}>Visite nosso Site</Text>
                <Foundation name="web" size={34} color="#fff" />
            </TouchableOpacity>
         </ImageBackground>


    </View>

  );

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    //justifyContent:'center',
   // alignItems:'center',
    backgroundColor:'#f3f3ff',
  //  paddingHorizontal:18
    //marginVertical:2
  },
  title:{
    fontSize:34,
    marginBottom:34,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#121212',
    fontWeight:'bold'
  },
  input:{
    width:'100%',
    height: 40,
    backgroundColor:'#ffffff',
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 4,
    color:'#121212'
  },
  button:{
    width:'50%',
    height: 60,
    backgroundColor: '#45d800',
    borderRadius: 8,
    marginBottom: 8,
    marginTop:'130%',
    justifyContent:'center',
    alignItems: 'center',
  },
  buttonText:{
    color:'#fff',
    justifyContent:'center',
    fontWeight:'condensed',
    fontSize: 18
  },
  labelError:{
    width: '100%',
    alignSelf:'flex-start',
    color:'#ff375b',
    marginBottom: 8, 
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width:"80%",
    backgroundColor:"blue",
    borderRadius: 8,
    padding: 8,
  },
  logo:{
    flex:1,
    //justifyContent:'flex-end',
    alignItems:'center'
   }

})