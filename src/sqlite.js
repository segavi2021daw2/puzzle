import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Alert, TouchableOpacity } from 'react-native';
import {Timer} from "./timer";

const estils = StyleSheet.create({
  textPeu: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    
  },
  peu: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FA0'
  },
});
export class M09_Sqlite extends React.Component {
  constructor(props) {
  
    super(props);
    this.state = {
      path: null,
      
    };
  

   
    
    var db = SQLite.openDatabase("db.db");

    db.transaction(tx => {

       
        
      tx.executeSql(
        " create table Partida (puntuacion int, nombre text);"
      );
    });
    

  
    

    db.transaction(
      tx => {
     
      
        tx.executeSql("select * from Partida", [], (_, { rows }) =>
          console.log(JSON.stringify(rows)),
         
        );
      }
    );

    this.mostrarMissatge = () => {
       

        db.transaction(
            tx => {
              
           var o= tx.executeSql("select * from Partida", [], (_, { rows }) =>
           document.write(JSON.stringify(rows)),
               
              );      
            }
          );
        }

       this.registrar = () => {


        var name =document.getElementById('name').value;
        var punt =document.getElementById('puntos').value;
        
      
        console.log(name);
        console.log(punt);
        var db = SQLite.openDatabase("db.db");
        db.transaction(
         
            
            tx => {
             
                tx.executeSql(        
                    "insert into Partida (nombre, puntuacion) VALUES (?,?)",
                    [name, punt],
                    
                    (tx, results) => {               
                      if (results.rowsAffected > 0 ) {
                        console.log('Insert success');              
                      } else {
                        console.log('Insert failed');
                      }
                    }
                  );
                
          
       }
          );
    

      
  }
    };

  

  render() {
    return (
        <div id="datos">
           
        <h1 id="sqlite"><hr></hr>Datos Guardados en Sqlite<br></br>Pulsa el botón para consultar las puntuaciones registradas <hr></hr></h1>
      
      <div id="pos">
      <TouchableOpacity onPress={this.mostrarMissatge}>
          <Text>Consultar puntuaciones</Text>
        </TouchableOpacity>
     
        <TouchableOpacity onPress={this.registrar}>
         <br></br> <Text>Registrar puntuación</Text>
         <Timer></Timer>
        </TouchableOpacity>
      <p>Nombre</p>
        <input name="nombre" id="name"></input>
        <p>Puntos</p>
        <input name="Puntos" id="puntos"></input>
        </div>
        </div>
    );

  }
}