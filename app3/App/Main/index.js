import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import Top from '../Top';
import Icon from '../Icon';

class app3 extends Component {

  static defaultProps = {
    options: [
      'Pedra',
      'Papel',
      'Tesoura'
    ]
  };

  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  randomNumber() {
    return Math.floor(Math.random() * 3);
  }

  jokenPo(escolhaUsuario) {
    const escolhaComputador = app3.defaultProps.options[this.randomNumber()];
    let resultado = '';

    if (escolhaComputador === 'Pedra') {
      if (escolhaUsuario === 'Pedra') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'Papel') {
        resultado = 'Usuário ganhou';
      } else {
        resultado = 'Computador ganhou';
      }
    }

    if (escolhaComputador === 'Papel') {
      if (escolhaUsuario === 'Papel') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'Tesoura') {
        resultado = 'Usuário ganhou';
      } else {
        resultado = 'Computador ganhou';
      }
    }

    if (escolhaComputador === 'Tesoura') {
      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'Pedra') {
        resultado = 'Usuário ganhou';
      } else {
        resultado = 'Computador ganhou';
      }
    }

    this.setState({
      escolhaUsuario,
      escolhaComputador,
      resultado
    });
  }

  render() {
    return (
      <View style={styles.main}>

        <View style={styles.top}>
          <Top />
        </View>

        <View style={styles.actions}>
          <View style={styles.button}>
            <Button
              title={app3.defaultProps.options[0]} 
              onPress={() => this.jokenPo(app3.defaultProps.options[0])} 
            />
          </View>
          <View style={styles.button}>
            <Button
              title={app3.defaultProps.options[1]}
              onPress={() => this.jokenPo(app3.defaultProps.options[1])}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={app3.defaultProps.options[2]}
              onPress={() => this.jokenPo(app3.defaultProps.options[2])} 
            />
          </View>
        </View>

        <View style={styles.result}>
          <Text style={styles.textResult}>{this.state.resultado}</Text>
          <Icon choose={this.state.escolhaComputador} player='Computador' />
          <Icon choose={this.state.escolhaUsuario} player='Você' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  top: {
    backgroundColor: '#28B4E5',
    paddingTop: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    flex: 1
  },
  result: {
    marginTop: 10,
    alignItems: 'center'
  },
  textResult: {
    fontSize: 25,
    height: 60,
    fontWeight: 'bold',
    color: 'red'
  }
});

export default app3;
