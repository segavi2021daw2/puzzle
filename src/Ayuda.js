import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { withRouter } from 'react-router';




const estils = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#0f0'
  
  }
});

export class Ayuda extends React.Component {
    render() {
      return (
          <div id="ayuda">
      <hr></hr>
          <b>Te encuentras en el apartado de ayuda de la aplicación</b><br></br>
           Esta aplicación está desarrollada en react-native y permite resolver puzzles.<br></br>
           Tan solo debes  clickar en ir al juego para poder empezar. <br></br>
           Así mismo en la pantalla de Puntuaciones también podrás consultar resultados de las partidas.<br></br>
         ¿Serás el primero en el ranking en resolverlo en menos tiempo? <br></br>
           <b>¡Comprobémoslo! </b>
           <hr></hr>
            </div>
        
      );
    }
}