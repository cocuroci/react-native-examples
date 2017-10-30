import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import firebase from 'firebase';

export default class App extends Component<{}> {

    componentWillMount() {
        let config = {
            apiKey: "AIzaSyCOMVSFKGJxurZOn-v9o7ADz23EiDgI3ps",
            authDomain: "reactnative-58359.firebaseapp.com",
            databaseURL: "https://reactnative-58359.firebaseio.com",
            projectId: "reactnative-58359",
            storageBucket: "reactnative-58359.appspot.com",
            messagingSenderId: "444919186695"
        };

        firebase.initializeApp(config);
    }

    cadastrarUsuario() {
        let email = 'cocuroci@gmail.com';
        let password = '123456';

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            (erro) => {
                alert(erro.message)
            }
        )
    }

    verificarUsuarioLogado() {
        
    }

    render() {
        return (
            <View style={{ marginTop: 30 }}>
                <Button
                    onPress={() => this.cadastrarUsuario()}
                    title='Cadastrar usuário'
                    color='#841584'
                    accessibilityLabel='Cadastrar usuário'
                />
            </View>
        );
    }
}
