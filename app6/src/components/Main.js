import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../images/logo.png');
const btnJogar = require('../images/botao_jogar.png');
const btnSobreJogo = require('../images/sobre_jogo.png');
const btnOutrosJogos = require('../images/outros_jogos.png');

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.principal}>
        <View style={styles.apresentacaoJogo}>
          <Image source={logo} />

          <TouchableOpacity
            onPress={() => { Actions.result(); }}
          >
            <Image source={btnJogar} />
          </TouchableOpacity>
        </View>

        <View style={styles.rodape}>
          <TouchableOpacity
            onPress={() => { Actions.about(); }}
          >
            <Image source={btnSobreJogo} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { Actions.other(); }}
          >
            <Image source={btnOutrosJogos} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#61bd86'
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row' 
  }
});
