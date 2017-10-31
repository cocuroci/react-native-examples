import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import * as types from './types';

export const modificarAdicionarContatoEmail = text => {
    return {
        type: types.ADICIONAR_CONTATO_EMAIL,
        payload: text
    }
};

export const adicionarContato = email => {
    return dispatch => {
        let emailB64 = b64.encode(email)

        firebase.database()
            .ref(`contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                let value = snapshot.val();
                
                if (value) {

                } else {
                    adicionarContatoError(dispatch, 'Usuário não exists')
                }
            })
            .catch(error => adicionarContatoError(dispatch, error.message))

        adicionarContatoSucesso(dispatch)
    }
};

const adicionarContatoSucesso = dispatch => {
    dispatch({ type: types.ADICIONA_CONTATO })
}

const adicionarContatoError = (dispatch, errorMsg) => {
    dispatch({ type: types.ADICIONA_CONTATO })
}
