import React from 'react'
var Component = React.Component;
import { Text, View, Button, AppRegistry } from  'react-native';

const geraNumeroAliatorio = () => {
	var random = Math.floor(Math.random() * 10)
	alert(random)
}

export default class App extends Component<{}> {
	render() {
    	return (
    		<View>
      			<Text>Welcome to React Native!</Text>
      			<Button title='Gerar um número randomico' onPress={geraNumeroAliatorio} />
      		</View>
    	);
	}
}

AppRegistry.registerComponent('app1', () => App);