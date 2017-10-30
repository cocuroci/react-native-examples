import firebase from 'firebase'

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
            .then(user => cadastraUsuarioSucesso(dispatch, user))
            .catch(error => cadastroUsuarioError(dispatch, error))
    }
}

const cadastroUsuarioSucesso = (dispatch, user) => {
    dispatch ({ type: 'cadastra_usuario_sucesso' })
}

const cadastroUsuarioError = (dispatch, error) => {
    dispatch ({ type: 'cadastra_usuario_error' })
}
    