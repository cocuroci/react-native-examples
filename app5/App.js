import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaCliente from './src/components/CenaCliente';


const RootNavigator = StackNavigator({
    Main: {
      screen: CenaPrincipal
    },
    Client: {
      screen: CenaCliente
    }
  }, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#CCC'
      }
    }
  }
);

export default RootNavigator;