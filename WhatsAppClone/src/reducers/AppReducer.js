import * as types from '../actions/types';

const INITIAL_STATE = {
    adicionar_contato_email: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.ADICIONAR_CONTATO_EMAIL:
            return { ...state, adicionar_contato_email: action.payload }
        default:
            return state;
    }
}