import {
    MODIFICA_ADICIONA_CONTATO_EMAIL,
    ADICIONA_CONTATO_ERRO
} from '../actions/Types';

const INITIAL_STATE = {
    adiciona_contato_email: '',
    erroCadastro: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type) {
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return {...state, adiciona_contato_email: action.payload}
        case ADICIONA_CONTATO_ERRO:
            return {...state, erroCadastro: action.payload}
        default:
            return state;
    }
}