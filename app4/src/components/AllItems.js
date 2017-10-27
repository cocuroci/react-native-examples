import React, { Component } from 'react';
import {
  ScrollView,
  Text
} from 'react-native';

import axios from 'axios';
import Items from './Items';

export default class AllItems extends Component<{}> {
	constructor(props) {
		super(props);
		this.state = { listaItens: [] };
  }

  componentWillMount() {
    const url = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';

    axios.get(url)
      .then(response => { this.setState({ listaItens: response.data}) })
      .catch(error => { console.log('error ao recuperar os dados: ' + error) });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD'}}>
        {this.state.listaItens.map(item => (<Items key={item.titulo} item={item} />))}
      </ScrollView>
    );
  }
}
