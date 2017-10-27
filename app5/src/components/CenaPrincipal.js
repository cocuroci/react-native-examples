import React, { Component } from 'react';
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const logo = require('../images/logo.png');
const menuCliente = require('../images/menu_cliente.png');
const menuContato = require('../images/menu_contato.png');
const menuEmpresa = require('../images/menu_empresa.png');
const menuServico = require('../images/menu_servico.png');

export default class CenaPrincipal extends Component<{}> {
  static navigationOptions = {
    title: 'ATM Consultoria',
    headerBackTitle: 'Voltar'
  }

  render() {

    const { navigate } = this.props.navigation;
    
    return (
      <View style={{ backgroundColor: '#FFF', flex: 1 }}>
        <Image style={styles.logo} source={logo} />
        
        <View style={styles.menu}>
          <View style={styles.group}>

            <TouchableOpacity onPress={() => {
              navigate('Client')
            }}>
              <Image style={styles.image} source={menuCliente} />
            </TouchableOpacity>

            <Image style={styles.image} source={menuContato} />
          </View>
          <View style={styles.group}>
            <Image style={styles.image} source={menuEmpresa} />
            <Image style={styles.image} source={menuServico} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    margin: 20,
    alignSelf: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  group: {
    flexDirection: 'row' 
  },
  image: {
    margin: 15
  }
});
