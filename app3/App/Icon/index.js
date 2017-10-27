import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const imagePedra = require('../../images/pedra.png');
const imagePapel = require('../../images/papel.png');
const imageTesoura = require('../../images/tesoura.png');

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.choose === 'Pedra') {
      return (
        <View style={styles.icon}>
          <Text style={styles.textPlayer}>{this.props.player}</Text>
          <Image source={imagePedra} />
        </View>
      );
    } else if (this.props.choose === 'Papel') {
      return (
        <View style={styles.icon}>
          <Text style={styles.textPlayer}>{this.props.player}</Text>
          <Image source={imagePapel} />
        </View>
      );
    } else if (this.props.choose === 'Tesoura') {
      return (
        <View style={styles.icon}>
          <Text style={styles.textPlayer}>{this.props.player}</Text>
          <Image source={imageTesoura} />
        </View>
      );
    }

    return false;
  }
}

const styles = StyleSheet.create({
  icon: {
    marginBottom: 10,
    alignItems: 'center'
  },
  textPlayer: {
    marginBottom: 5,
    fontSize: 16
  }
});

export default Icon;
