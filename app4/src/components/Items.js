import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

export default class Items extends Component<{}> {
	constructor(props) {
		super(props);
		this.state = {};
  }

  render() {
    return (
      <View style={styles.item}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: this.props.item.foto }} />
        <View>
          <Text>{this.props.item.titulo}</Text>
          <Text>{this.props.item.valor}</Text>
          <Text>{this.props.item.local_anuncio}</Text>
          <Text>{this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#999',
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF'
  }
});
