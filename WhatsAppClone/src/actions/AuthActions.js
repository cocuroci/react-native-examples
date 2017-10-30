import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

export const modificaEmail = (text) => {
    return {
        type: 'modifica_email',
        payload: text
    }
}

export const modificaSenha = (text) => {
    return {
        type: 'modifica_senha',
        payload: text
    }
}

export const modificaNome = (text) => {
    return {
        type: 'modifica_nome',
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
                    .ref('contatos/' + emailB64)
                    .set({
                        nome: name
                    })
                    .then(value =>  cadastroUsuarioSucesso(dispatch))
                    .catch(error => cadastroUsuarioError(dispatch, error))
            })
            .catch(error => cadastroUsuarioError(dispatch, error))
    }
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch ({ type: 'cadastro_usuario_sucesso' })
    Actions.boasVindas()
}

const cadastroUsuarioError = (dispatch, error) => {
    dispatch ({ type: 'cadastro_usuario_error', payload: error.message })
}
    