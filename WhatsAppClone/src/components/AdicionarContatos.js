import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { modificarAdicionarContatoEmail, adicionarContato } from '../actions/AppActions';

class AdicionarContato extends Component {
    _renderAdicionarContato() {
        if (!this.props.cadastro_resultado_inclusao) {
            return (
                <View style={{ flex: 1, justifyContent: 'center'}}>
                    <View style={{ flex: 1, justifyContent: 'center'}}>
                        <TextInput
                            autoCorrect={false}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            placeholder='E-mail'
                            style={{ fontSize: 20, height: 45 }}
                            value={this.props.adicionar_contato_email}
                            onChangeText={(text) => this.props.modificarAdicionarContatoEmail(text)}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center'}}>
                        <Button
                            title='Adicionar'
                            color='#115E54'
                            onPress={() => this.props.adicionarContato(this.props.adicionar_contato_email) }
                        />
                        <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{this.props.cadastro_resultado_txt_error}</Text>
                    </View>
                </View>
            )
        }

        return ( 
            <View style={{ flex: 1, justifyContent: 'center'}}>
                <Text>Usuário cadastrado com sucesso</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', padding: 15 }}>
                { this._renderAdicionarContato() }
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        adicionar_contato_email: state.AppReducer.adicionar_contato_email,
        cadastro_resultado_txt_error: state.AppReducer.cadastro_resultado_txt_error,
        cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
    }
)

export default connect(mapStateToProps, { modificarAdicionarContatoEmail, adicionarContato })(AdicionarContato)