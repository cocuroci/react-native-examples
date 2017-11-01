import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ImageBackground, ActivityIndicator, StyleSheet  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, authUsuario } from '../actions/AuthActions'

const background = require('../images/background.png');

class FormLogin extends Component {

    _authUsuario() {
        const { email, senha } = this.props;
        this.props.authUsuario({email, senha})
    }

    _renderBtnAcessar() {
        if (this.props.loading_login) {
            return (
                <ActivityIndicator size='large' color='white' />
            );
        }

        return (
            <Button
                title='Acessar'
                onPress={() => this._authUsuario()}
            />
        );
    }

    render() {
        return (
            <ImageBackground style={styles.background} source={background}>
                <View style={styles.form}>
                    <View style={styles.topo}>
                        <Text style={{ color: 'white', backgroundColor: 'transparent' }}>WhatsApp Clone</Text>
                    </View>
                    <View style={styles.main}>
                        <TextInput 
                            autoCorrect={false}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            placeholder='E-mail'
                            placeholderTextColor='white'
                            
                            value={this.props.email} style={styles.input}  onChangeText={ text => this.props.modificaEmail(text) } />
                        <TextInput value={this.props.senha} secureTextEntry style={styles.input} placeholder='Senha' placeholderTextColor='white' onChangeText={ text => this.props.modificaSenha(text) } />
                        <TouchableOpacity
                            onPress={ () => Actions.cadastro() }
                        >
                            <Text style={{ color: 'white', backgroundColor: 'transparent' }}>Ainda não tem cadastro? Cadastre-se!</Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'white', backgroundColor: 'transparent', marginTop: 20 }}>{this.props.erroAuth}</Text>
                    </View>
                    <View style={styles.rodape}>
                        {this._renderBtnAcessar()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha,
        erroAuth: state.AuthReducer.erroAuth,
        loading_login: state.AuthReducer.loading_login
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

export default connect(mapStateToProps, { modificaEmail, modificaSenha, authUsuario })(FormLogin);
