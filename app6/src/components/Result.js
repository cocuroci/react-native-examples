import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';

const cara = require('../images/moeda_cara.png');
const coroa = require('../images/moeda_coroa.png');

const styles = StyleSheet.create({
	content: {
    flex: 1,
    backgroundColor: '#61bd86',
    justifyContent: 'center',
    alignItems: 'center'
	}
});

export default class Result extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = { resultado: '' };
  }

  componentWillMount() {
    const number = Math.floor(Math.random() * 2);
    let resultado = '';

    if (number === 0) {
      resultado = 'cara';
    } else {
      resultado = 'coroa';
    }

    this.setState({ resultado });
  }

  render() {
    if (this.state.resultado === 'cara') {
      return (
        <View style={styles.content}>
          <Image source={cara} />
        </View>
      );
    }

    return (
      <View style={styles.content}>
        <Image source={coroa} />
      </View>
    );
  }
}
