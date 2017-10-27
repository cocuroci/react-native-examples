import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';


const detalheClientes = require('../images/detalhe_cliente.png');
const cliente1 = require('../images/cliente1.png');
const cliente2 = require('../images/cliente2.png');

export default class CenaCliente extends Component<{}> {
  static navigationOptions = {
    title: 'Clientes',
  }
  
  render() {
    return (
      <View style={{ backgroundColor: '#FFF', flex: 1 }}>
        <Image source={detalheClientes} />
        <Text>Nossos clientes</Text>
        <Image source={cliente1} />
        <Text>Lorem ipsun</Text>
        <Image source={cliente2} />
        <Text>Lorem ipsun</Text>
      </View>
    );
  }
}
