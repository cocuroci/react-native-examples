import React, { Component } from 'react';
import { View, TextInput, Button, ImageBackground, Text, StyleSheet  } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../actions/AuthActions';

const background = require('../images/background.png');

class FormCadastro extends Component {

    _cadastraUsuario() {
        const name = this.props.nome;
        const email = this.props.email;
        const password = this.props.senha;

        this.props.cadastraUsuario({ name, email, password });
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={background}>
                <View style={styles.form}>
                    <View style={styles.main}>
                        <TextInput 
                            value={this.props.nome}
                            style={styles.input}
                            placeholder='Nome'
                            placeholderTextColor='white' 
                            onChangeText={ text => this.props.modificaNome(text) } />

                        <TextInput 
                            value={this.props.email}
                            style={styles.input}
                            placeholder='E-mail'
                            placeholderTextColor='white'
                            onChangeText={ text => this.props.modificaEmail(text) } />

                        <TextInput 
                            value={this.props.senha}
                            secureTextEntry 
                            style={styles.input}
                            placeholder='Senha'
                            placeholderTextColor='white' 
                            onChangeText={ text => this.props.modificaSenha(text) } />

                        <Text style={{ backgroundColor: 'transparent', color: '#FFF', height: 20, marginVertical: 10  }}>{this.props.erroCadastro}</Text>
                    </View>
                    
                    

                    <View style={styles.rodape}>
                        <Button
                            title='Cadastrar'
                            onPress={() => this._cadastraUsuario()}
                        />
                    </View>
                    
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        nome: state.AuthReducer.nome,
        email: state.AuthReducer.email,
        senha: state.AuthReducer.senha,
        erroCadastro: state.AuthReducer.erroCadastro,
    }
);

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 10
    },
    main: {
        justifyContent: 'center',
        flex: 4
    },
    input: {
        fontSize: 20,
        height: 45
    },
    rodape: {
        flex: 1
    }
});

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome, cadastraUsuario })(FormCadastro);
