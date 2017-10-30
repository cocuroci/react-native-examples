import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../images/logo.png')
const background = require('../images/background.png');

export default props => (
	<ImageBackground style={{ flex: 1}} source={background}>
		<View style={{ flex: 1, padding: 15}}>
			<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ marginBottom: 20, color: '#FFF', fontSize: 20, backgroundColor: 'transparent' }}>Seja bem vindo!</Text>
				<Image source={logo} />
			</View>
			<View style={{ flex: 1 }}>
				<Button
					title='Fazer login'
					onPress={() => Actions.popTo('login')}
				/>
			</View>
		</View>
	</ImageBackground>
);
