import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import * as types from './types';

export const modificaEmail = (text) => {
    return {
        type: types.MODIFICA_EMAIL,
        payload: text
    }
}

export const modificaSenha = (text) => {
    return {
        type: types.MODIFICA_SENHA,
        payload: text
    }
}

export const modificaNome = (text) => {
    return {
        type: types.MODIFICA_NOME,
        payload: text
    }
}

export const cadastraUsuario = ({name, email, password}) => {
    return dispatch => {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                let emailB64 = b64.encode(email);

                firebase.database()
                    .ref(`contatos/${emailB64}`)
                    .set({
                        nome: name
                    })
                    .then(value =>  cadastroUsuarioSucesso(dispatch))
                    .catch(error => cadastroUsuarioError(dispatch, error))
            })
            .catch(error => cadastroUsuarioError(dispatch, error))
    }
}

export const authUsuario = ({email, senha}) => {
    return dispatch => {

        dispatch({ type: types.LOGIN_EM_ANDAMENTO, payload: true })

        firebase.auth()
            .signInWithEmailAndPassword(email, senha)
            .then(() => authUsuarioSuccesso(dispatch))
            .catch(error => authUsuarioError(dispatch, error))
    }
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch ({ type: types.CADASTRO_USUARIO_SUCESSO })
    Actions.boasVindas()
}

const cadastroUsuarioError = (dispatch, error) => {
    dispatch ({ type: types.CADASTRO_USUARIO_ERRO, payload: error.message })
}

const authUsuarioSuccesso = (dispatch) => {
    dispatch ({ type: types.LOGIN_USUARIO_SUCESSO })
    Actions.principal();
}

const authUsuarioError = (dispatch, error) => {
    dispatch ({ type: types.LOGIN_USUARIO_ERRO, payload: error.message })
}
