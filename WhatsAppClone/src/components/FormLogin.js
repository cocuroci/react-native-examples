import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ImageBackground, StyleSheet  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha } from '../actions/AuthActions'

const background = require('../images/background.png');

const form = props => (
    <ImageBackground style={styles.background} source={background}>
        <View style={styles.form}>
            <View style={styles.topo}>
                <Text style={{ color: 'white', backgroundColor: 'transparent' }}>WhatsApp Clone</Text>
            </View>
            <View style={styles.main}>
                <TextInput value={props.email} style={styles.input} placeholder='E-mail' placeholderTextColor='white' onChangeText={ text => props.modificaEmail(text) } />
                <TextInput value={props.senha} secureTextEntry style={styles.input} placeholder='Senha' placeholderTextColor='white' onChangeText={ text => props.modificaSenha(text) } />
                <TouchableOpacity
                    onPress={ () => Actions.cadastro() }
                >
                    <Text style={{ color: 'white', backgroundColor: 'transparent' }}>Ainda não tem cadastro? Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rodape}>
                <Button
                    title='Acessar'
                />
            </View>
        </View>
    </ImageBackground>
);

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha
    }
);

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    form: {
        flex: 1,
        padding: 10
    },
    topo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        flex: 2
    },
    input: {
        fontSize: 20,
        height: 45
    },
    rodape: {
        flex: 2
    }
});

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(form);
