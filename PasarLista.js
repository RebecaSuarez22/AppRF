import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Button, Alert, TextInput, TouchableOpacity} from "react-native";
import { Camera } from 'expo-camera';
import { Dimensions } from 'react-native'
import styles from "./Styles"
import stop from "../assets/stop.png"


function pasarLista({navigation, route}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const {curso} = route.params;

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var today =  year+'-'+month+'-'+date 


    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <Camera style={{flex: 1}} type={type}>
            <View style={{alignItems:"center", paddingTop:10}}>
                <Text style={{fontSize:26, fontWeight:'bold', paddingBottom: 20, color: 'white'}}>13/20</Text>
            </View>

            <View style={{height: Dimensions.get('window').height-200}}>
              <Text></Text>
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('Ver Historico', {curso: curso, fecha: today})}}>
              <View style={{alignItems:'center', justifyContent: 'flex-end', flex:1}}>
                <Image style={{height:70, width:70}}
                  source={stop}          
               />
              </View>
            </TouchableOpacity>
        </Camera>
      </View>
    );
  }
  
  
export default pasarLista