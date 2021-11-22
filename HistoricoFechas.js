import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, Button, Alert, TextInput, TouchableOpacity, ScrollView} from "react-native";
import styles from "./Styles"
import chica1 from "../assets/caraChica1.png"
import atras from "../assets/atras.png"
import { Dimensions } from 'react-native'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['es'] = {
  monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
  dayNames: ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
  dayNamesShort: ['Dom.','Lun.','Mar.','Mie.','Jue.','Vie.','Sab.'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'es';





function historicoFechas  ({navigation, route}) {
    const {curso} = route.params;
    
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var today =  year+'-'+month+'-'+date 
    
  return( 
    <ScrollView style={styles.scrollView}>
    <View style = {styles.container}>
        <View style={styles.cursoContainer}>     


            <View style={{padding:10,alignItems:'center'}}>
                <Text style={{fontSize:26,fontWeight:'bold'}}>Curso {curso} </Text>
            </View>       

            <View style = {{height: 40}}></View>

            <Calendar
                current={today}  
                onDayPress={(day) => {navigation.navigate('Ver Historico', {curso: curso, fecha: day.dateString});window.alert(day.dateString)}}
                
            />

            {/* <View style={{padding:10, flexDirection: "row",justifyContent: "center", alignItems:'center'}}>
                <Image style={{height:50, width:50}}
                    source={atras}          
                />
                <Text style={{fontSize:26,  paddingLeft: 60, paddingRight: 60}}>Octubre</Text>

                <Image style={{height:50, width:50, transform: [{ rotate: '180deg' }]}}
                    source={atras}          
                />
            </View>     

            <TouchableOpacity  onPress={() => {navigation.navigate('Ver Historico', {curso: curso,});}}>  
                <View style={styles.listaContainer}>                
                    <View style={styles.listaFechas}>
                        <Text style={{fontSize:24, width:240}}>Viernes 01/10/2021</Text>      
                        <Text style={{fontSize:24, paddingLeft:40,fontWeight:'bold'}}>19/20</Text>              
                    </View>   
                </View> 
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => {navigation.navigate('Ver Historico', {curso: curso,});}}>  
                <View style={styles.listaContainer}>                
                    <View style={styles.listaFechas}>
                        <Text style={{fontSize:24, width:240}}>Lunes 04/10/2021</Text>      
                        <Text style={{fontSize:24, paddingLeft:40,fontWeight:'bold'}}>18/20</Text>              
                    </View>   
                </View> 
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => {navigation.navigate('Ver Historico', {curso: curso,});}}>  
                <View style={styles.listaContainer}>                
                    <View style={styles.listaFechas}>
                        <Text style={{fontSize:24, width:240}}>Martes 05/10/2021</Text>      
                        <Text style={{fontSize:24, paddingLeft:40,fontWeight:'bold'}}>20/20</Text>              
                    </View>   
                </View> 
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => {navigation.navigate('Ver Historico', {curso: curso,});}}>  
                <View style={styles.listaContainer}>                
                    <View style={styles.listaFechas}>
                        <Text style={{fontSize:24, width:240}}>Miercoles 06/10/2021</Text>      
                        <Text style={{fontSize:24, paddingLeft:40,fontWeight:'bold'}}>17/20</Text>              
                    </View>   
                </View> 
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => {navigation.navigate('Ver Historico', {curso: curso,});}}>  
                <View style={styles.listaContainer}>                
                    <View style={styles.listaFechas}>
                        <Text style={{fontSize:24, width:240}}>Jueves 07/10/2021</Text>      
                        <Text style={{fontSize:24, paddingLeft:40,fontWeight:'bold'}}>20/20</Text>              
                    </View>   
                </View> 
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => {navigation.navigate('Ver Historico', {curso: curso,});}}>  
                <View style={styles.listaContainer}>                
                    <View style={styles.listaFechas}>
                        <Text style={{fontSize:24, width:240}}>Viernes 09/10/2021</Text>      
                        <Text style={{fontSize:24, paddingLeft:40,fontWeight:'bold'}}>19/20</Text>              
                    </View>   
                </View> 
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => {navigation.navigate('Ver Historico', {curso: curso,});}}>  
                <View style={styles.listaContainer}>                
                    <View style={styles.listaFechas}>
                        <Text style={{fontSize:24, width:240}}>Lunes 11/10/2021</Text>      
                        <Text style={{fontSize:24, paddingLeft:40,fontWeight:'bold'}}>18/20</Text>              
                    </View>   
                </View> 
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => {navigation.navigate('Ver Historico', {curso: curso,});}}>  
                <View style={styles.listaContainer}>                
                    <View style={styles.listaFechas}>
                        <Text style={{fontSize:24, width:240}}>Martes 12/10/2021</Text>      
                        <Text style={{fontSize:24, paddingLeft:40,fontWeight:'bold'}}>19/20</Text>              
                    </View>   
                </View> 
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => {navigation.navigate('Ver Historico', {curso: curso,});}}>  
                <View style={styles.listaContainer}>                
                    <View style={styles.listaFechas}>
                        <Text style={{fontSize:24, width:240}}>Miercoles 13/10/2021</Text>      
                        <Text style={{fontSize:24, paddingLeft:40,fontWeight:'bold'}}>20/20</Text>              
                    </View>   
                </View> 
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => {navigation.navigate('Ver Historico', {curso: curso,});}}>  
                <View style={styles.listaContainer}>                
                    <View style={styles.listaFechas}>
                        <Text style={{fontSize:24, width:240}}>Jueves 14/10/2021</Text>      
                        <Text style={{fontSize:24, paddingLeft:40,fontWeight:'bold'}}>19/20</Text>              
                    </View>   
                </View> 
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => {navigation.navigate('Ver Historico', {curso: curso,});}}>  
                <View style={styles.listaContainer}>                
                    <View style={styles.listaFechas}>
                        <Text style={{fontSize:24, width:240}}>Viernes 15/10/2021</Text>      
                        <Text style={{fontSize:24, paddingLeft:40,fontWeight:'bold'}}>17/20</Text>              
                    </View>   
                </View> 
            </TouchableOpacity>

             */}

         
      </View>
    </View>
    </ScrollView>
  );
};



export default historicoFechas