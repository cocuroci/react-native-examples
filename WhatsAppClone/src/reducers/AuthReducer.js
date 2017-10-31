import * as types from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroAuth: '',
    loading_login: false
}

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case types.MODIFICA_EMAIL:
            return { ...state, email: action.payload }
        case types.MODIFICA_SENHA:
            return { ...state, senha: action.payload }
         case types.MODIFICA_NOME:
            return { ...state, nome: action.payload }
        case types.CADASTRO_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload }
        case types.CADASTRO_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: ''}
        case types.LOGIN_USUARIO_ERRO:
            return { ...state, erroAuth: action.payload, loading_login: false }
        case types.LOGIN_EM_ANDAMENTO:
            return { ...state, loading_login: action.payload }
        default:
            return state; break;
    }
}
