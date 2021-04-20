import React from 'react';
import { StyleSheet, Text, View } from 'react-native';




const estils = StyleSheet.create({
  contenidor: {
    flex: 1,
    backgroundColor: '#0f0'
  }
});

export class M00_Home extends React.Component {
    render() {
        return (
            <View style={estils.contenidor}>
              
            
              <Text>Aprenent React Native a DAW2</Text>
             
            </View>
          );

    }
}