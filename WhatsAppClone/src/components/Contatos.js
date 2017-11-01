import React,  { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { contatosUsuariosFetch } from '../actions/AppActions';

class Contatos extends Component {
    
    constructor(props) {
        super(props);
        this.fonteDeDados = []
    }

    componentWillMount() {
        this.props.contatosUsuariosFetch()
        this.criaFonteDedados(this.props.contatos)
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDedados(nextProps.contatos)
    }

    criaFonteDedados(contatos) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.fonteDeDados = ds.cloneWithRows(contatos)
    }

    renderRow(contato) {
        return (
            <TouchableHighlight
                activeOpacity={ 0.3 }
                underlayColor='#FFFFFF'
                onPress={ () => Actions.conversa() }
            >
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC'}}>
                    <Text style={{ fontSize: 20 }}>{contato.nome}</Text>
                    <Text style={{ fontSize: 16 }}>{contato.email}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.fonteDeDados}
                renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = state => {
    const contatos = _.map(state.ListaContatoReducer, (val, uid) => {
        return { ...val, uid }
    });

    return {
        contatos
    }
}

export default connect(mapStateToProps, { contatosUsuariosFetch })(Contatos);
