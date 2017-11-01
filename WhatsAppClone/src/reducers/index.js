import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AppReducer from './AppReducer';
import ListaContatoReducer from './ListaContatoReducer';

export default combineReducers({
    AuthReducer,
    AppReducer,
    ListaContatoReducer
});
