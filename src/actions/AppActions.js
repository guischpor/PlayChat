import {
    MODIFICA_ADICIONA_CONTATO_EMAIL,
} from './Types';

export const modificaAdiconaContatoEmail = email => {
    return {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: email
    }
}

export const adicionaContato = email => {
    console.log(email)

    return {
        type: ''
    }
}