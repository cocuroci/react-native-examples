import * as types from '../actions/types';

const INITIAL_STATE = {
    adicionar_contato_email: '',
    cadastro_resultado_txt_error: '',
    cadastro_resultado_inclusao: false,
    mensagem: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.ADICIONAR_CONTATO_EMAIL:
            return { ...state, adicionar_contato_email: action.payload }
        case types.ADICIONAR_CONTATO_SUCESSO:
            return { ...state, cadastro_resultado_inclusao: action.payload, adicionar_contato_email: '' }
        case types.ADICIONAR_CONTATO_ERROR:
            return { ...state, cadastro_resultado_txt_error: action.payload }
        case types.MODIFICA_MENSAGEM:
            return { ...state, mensagem: action.payload }
        default:
            return state;
    }
}