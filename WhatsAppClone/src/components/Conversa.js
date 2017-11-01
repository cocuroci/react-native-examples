import React , { Component } from 'react';
import { View, TextInput, ListView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { modificaMensagem } from '../actions/AppActions';

const image = require('../images/enviar_mensagem.png');

class Conversa extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 15, backgroundColor: '#eee4dc' }}>
                <View style={{ flex: 1, paddingBottom: 15 }}>
                    
                </View>
                <View style={{ height: 60, flexDirection: 'row' }}>
                    <TextInput
                        value={this.props.mensagem}
                        onChangeText={text => this.props.modificaMensagem(text) }
                        style={{ flex: 4, backgroundColor: '#FFF', fontSize: 18  }}
                    />
                    <TouchableOpacity
                        onPress={() => false}
                    >
                        <Image source={image} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

mapToStateToProps = state => {
    return {
        mensagem: state.AppReducer.mensagem
    }
}

export default connect(mapToStateToProps, { modificaMensagem })(Conversa);
