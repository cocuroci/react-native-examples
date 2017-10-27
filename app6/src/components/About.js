import React, { Component } from 'react';
import {
  Text
} from 'react-native';

export default class About extends Component<{}> {
  render() {
    return (
      <Text style={{ flex: 1, backgroundColor: '#61bd8c' }}>
        About games
      </Text>
    );
  }
}
