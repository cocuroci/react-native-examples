import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import * as types from './types';
import _ from 'lodash';

export const modificarAdicionarContatoEmail = text => {
    return {
        type: types.ADICIONAR_CONTATO_EMAIL,
        payload: text
    }
};

export const habilitaInclusaoContato = () => {
    return {
        type: types.ADICIONAR_CONTATO_SUCESSO,
        payload: false
    }
}

export const adicionarContato = email => {
    return dispatch => {
        let emailB64 = b64.encode(email)

        console.log(email)

        firebase.database()
            .ref(`contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                let value = snapshot.val();
                
                if (value) {
                    const dadosUsuario = _.first(_.values(value));

                    const { currentUser } = firebase.auth();
                    let emailUsuarioB64 = b64.encode(currentUser.email);

                    firebase.database()
                        .ref(`/usuario_contatos/${emailUsuarioB64}`)
                        .push({
                            email,
                            nome: dadosUsuario.nome
                        })
                        .then(() => adicionarContatoSucesso(dispatch))
                        .catch(error => adicionarContatoError(dispatch, error.message))

                } else {
                    adicionarContatoError(dispatch, 'Usuário não existe')
                }
            }).catch(error => adicionarContatoError(dispatch, error.message))
    }
};

export const contatosUsuariosFetch = () => {
    const { currentUser } = firebase.auth();

    return dispatch => {
        let emailUsuarioB64 = b64.encode(currentUser.email);

        firebase.database()
            .ref(`/usuario_contatos/${emailUsuarioB64}`)
            .on('value', snapshot => {
                dispatch({
                    type: types.LISTA_CONTATO_USUARIO,
                    payload: snapshot.val()
                })
            });
    }
}

export const modificaMensagem = text => {
    return {
        type: types.MODIFICA_MENSAGEM,
        payload: text
    }
}

const adicionarContatoSucesso = dispatch => {
    dispatch({ type: types.ADICIONAR_CONTATO_SUCESSO, payload: true })
}

const adicionarContatoError = (dispatch, errorMsg) => {
    dispatch({ type: types.ADICIONAR_CONTATO_ERROR, payload: errorMsg })
}
