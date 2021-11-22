import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image, Button, Alert, TextInput, TouchableOpacity, ScrollView} from "react-native";
import styles from "./Styles"
import chica1 from "../assets/caraChica1.png"
import chica2 from "../assets/caraChica2.png"
import chico1 from "../assets/caraChico1.png"
import chico2 from "../assets/caraChico2.png"
import si from "../assets/si.png"
import no from "../assets/no.png"
import justificada from "../assets/justificada.png"
import * as SQLite from 'expo-sqlite';
import { render } from "react-dom";
import a1 from "../assets/alumnos/a1.png"

const db = SQLite.openDatabase('db');

function verHistorico ({route, navigation}) {
    const {curso} = route.params;
    const {fecha} = route.params;
    let [flatListItems, setFlatListItems] = useState([]);

    const db = SQLite.openDatabase('db');

    db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS historico (id INTEGER PRIMARY KEY AUTOINCREMENT,  idAlumno INTEGER, fecha TEXT, asistencia TEXT);')
    })    

    //Seleccionamos todos los alumnos
    useEffect(() => {
        db.transaction((tx) => {
         tx.executeSql(
            'SELECT * FROM alumnosconimagen WHERE clase = ?', [curso],
            (tx, results) => {
                var temp = [];
                for (let i = 0; i < results.rows.length; ++i)
                  temp.push(results.rows.item(i));
                  setFlatListItems(temp);
            }
          );
        });
      }, []);

//Para cada alumno = item
let listItemView = (item) => {
    return (
        <ScrollView style={styles.scrollView}>
        <View style = {styles.container}>
            <View style={styles.cursoContainer}> 
              
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                        source={item.imagen}          
                    />
                    <Text style={styles.textoAlumnos}>{item.nombre}</Text>   
                    <Image style={{height:50, width:50,}}
                        source={si}          
                    />                
                </View>  


         
      </View>
    </View>
    </ScrollView>
  );
};

// Separador alumnos
let listViewItemSeparator = () => {
  return (
    <View
      style={{
        height: 0.2,
        width: '100%',
        backgroundColor: '#808080'
      }}
    />
  );
};

return(     
  <ScrollView>
    <View style = {styles.container}>
      <View style={styles.cursoContainer}>  
            <View style={{padding:20, alignItems:'center'}}>
                <Text style={{fontSize:24, fontWeight:'bold'}}>{'Fecha: ' + fecha}</Text>
            </View>

            <FlatList
                data={flatListItems}
                ItemSeparatorComponent={listViewItemSeparator}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => listItemView(item)}
            />

      </View>
    </View>

  </ScrollView>
  
  
);
};


 

   /*
    return( 
        <ScrollView style={styles.scrollView}>
        <View style = {styles.container}>
            <View style={styles.cursoContainer}>
            
                <View style={{padding:20, alignItems:'center'}}>
                    <Text style={{fontSize:24, fontWeight:'bold'}}>Lunes 04/10/2021</Text>
                </View>          

            <View style={styles.listaContainer}>                
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                        source={chica1}          
                    />
                    <Text style={styles.textoAlumnos}>Marta Suárez</Text>   
                    <Image style={{height:50, width:50,}}
                        source={si}          
                    />                
                </View>   
            </View> 

            <View style={styles.listaContainer}>                
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                        source={chico1}          
                    />
                    <Text style={styles.textoAlumnos}>Álvaro Rodríguez </Text>  
                    <Image style={{height:50, width:50,}}
                        source={si}          
                    />                 
                </View>   
            </View> 

            <View style={styles.listaContainer}>                
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                        source={chica2}          
                    />
                    <Text style={styles.textoAlumnos}> Paula Jímenez </Text>   
                    <Image style={{height:50, width:50,}}
                        source={no}          
                    />                 
                </View>   
            </View> 

            <View style={styles.listaContainer}>                
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                        source={chico2}          
                    />
                    <Text style={styles.textoAlumnos}>Alberto Martinez </Text>    
                    <Image style={{height:50, width:50,}}
                        source={si}          
                    />                
                </View>   
            </View> 

            <View style={styles.listaContainer}>                
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                        source={chico2}          
                    />
                    <Text style={styles.textoAlumnos}>Ariadna Díaz </Text> 
                    <Image style={{height:50, width:50,}}
                        source={si}          
                    />                   
                </View>   
            </View> 

            <View style={styles.listaContainer}>                
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                        source={chico2}          
                    />
                    <Text style={styles.textoAlumnos}>Raul Lopez </Text> 
                    <Image style={{height:50, width:50,}}
                        source={justificada}          
                    />                   
                </View>   
            </View> 

            <View style={styles.listaContainer}>                
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                        source={chico2}          
                    />
                    <Text style={styles.textoAlumnos}> Alicia Perez </Text>   
                    <Image style={{height:50, width:50,}}
                        source={si}          
                    />                 
                </View>   
            </View> 

            <View style={styles.listaContainer}>                
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                        source={chico2}          
                    />
                    <Text style={styles.textoAlumnos}> Julian Almeida </Text>  
                    <Image style={{height:50, width:50,}}
                        source={si}          
                    />                  
                </View>   
            </View> 

            <View style={styles.listaContainer}>                
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                        source={chico2}          
                    />
                    <Text style={styles.textoAlumnos}> Cintia Bolaños </Text>  
                    <Image style={{height:50, width:50,}}
                        source={no}          
                    />                  
                </View>   
            </View> 

            <View style={styles.listaContainer}>                
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                        source={chico2}          
                    />
                    <Text style={styles.textoAlumnos}> Raquel Molinillo </Text> 
                    <Image style={{height:50, width:50,}}
                        source={si}          
                    />                   
                </View>   
            </View> 

            <View style={styles.listaContainer}>                
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                        source={chico2}          
                    />
                    <Text style={styles.textoAlumnos}> Daniel Alfonso</Text>  
                    <Image style={{height:50, width:50,}}
                        source={justificada}          
                    />                  
                </View>   
            </View> 

         
      </View>
    </View>
    </ScrollView>

  );
    
  

  return( 
    <ScrollView style={styles.scrollView}>
    <View style = {styles.container}>
        <View style={styles.cursoContainer}>
        
            <View style={{padding:20, alignItems:'center'}}>
                <Text style={{fontSize:24, fontWeight:'bold'}}>Lunes 04/10/2021</Text>
            </View>          

            <View style={styles.listaContainer}>                
                <View style={styles.listaAlumno}>
                    <Image style={{height:50, width:50,}}
                    source={chica1}          
                    />
                    <Text style={styles.textoAlumnos}>{nombre} {apellidos}</Text>   
                    <Image style={{height:50, width:50,}}
                        source={si}          
                    />                
                </View>   
            </View> 
        </View>
    </View>
    </ScrollView>
    );

    */





export default verHistorico;