import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

const frases = [
  "aa",
  "bb",
  "cc",
  "dd",
  "ee"
]

const gerarNovaFrase = () => {
  var number = Math.floor(Math.random() * 5);
  Alert.alert(frases[number])
}

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.principal}>

        <Image source={ require('./imgs/logo.png') } />

        <TouchableOpacity style={styles.botao}
          onPress={gerarNovaFrase}>
          <Text style={styles.textoBotao}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}