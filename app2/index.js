//Import
import React, { Component } from 'react';
import { Text, View, Button, AppRegistry, TouchableOpacity, Image } from 'react-native';

//Formatações
const Estilos = {
	principal: {
		paddingTop: 40
	},

	botao: {
		padding: 20,
		backgroundColor: '#48BBEC',
		borderColor: '#0048BBEC',
		borderWidth: 1,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.4
	},

	textoBotao: {
		color: '#FFF',
		fontSize: 16,
		fontWeight: 'bold',
		alignSelf: 'center'
	}
};

//APP
const App = () => {
	const {  principal, botao, textoBotao } = Estilos;

	const onClick = () => {
		alert("Click")
	}

	return(
		<View style={ principal }>
			<Image source={ require('./imgs/uvas.png') }>
				<Text>Legenda</Text>
			</Image>

			<Button 
				onPress={onClick}
				title="Cique aqui"
				color='purple'
				/>

			<TouchableOpacity style={botao} onPress={onClick}>
				<Text style={textoBotao}>Clique aqui TouchableOpacity</Text>
			</TouchableOpacity>
		</View>
	);
}

AppRegistry.registerComponent('app2', () => App)