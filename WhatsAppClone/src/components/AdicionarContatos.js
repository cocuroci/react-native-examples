import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { modificarAdicionarContatoEmail, adicionarContato } from '../actions/AppActions';

const AdicionarContato = props => (
    <View style={{ flex: 1, justifyContent: 'center', padding: 15 }}>
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <TextInput
                placeholder='E-mail'
                style={{ fontSize: 20, height: 45 }}
                value={props.adicionar_contato_email}
                onChangeText={(text) => props.modificarAdicionarContatoEmail(text)}
            />
        </View>
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <Button
                title='Adicionar'
                color='#115E54'
                onPress={() => props.adicionarContato(props.adicionar_contato_email) }
            />
        </View>
    </View>
);

const mapStateToProps = state => (
    {
        adicionar_contato_email: state.AppReducer.adicionar_contato_email
    }
)

export default connect(mapStateToProps, { modificarAdicionarContatoEmail, adicionarContato })(AdicionarContato)