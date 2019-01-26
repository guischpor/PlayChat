import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
    MODIFICA_EMAIL,
    MODIFICA_NOME,
    MODIFICA_SENHA,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO
} from './Types';

export const modificaEmail = (email) => {
    return {
        type: MODIFICA_EMAIL,
        payload: email
    }
}

export const modificaSenha = (senha) => {
    return {
        type: MODIFICA_SENHA,
        payload: senha
    }
}

export const modificaNome = (nome) => {
    return {
        type: MODIFICA_NOME,
        payload: nome
    }
}
//funcao cadastra usuario
export const cadastraUsuario = (nome, email, senha) => {
    return dispatch => {
        let usuario = firebase.auth();
        usuario.createUserWithEmailAndPassword(
            email,
            senha
        )
        .then(user => {
            let emailB64 = b64.encode(email);
            const dataBase = firebase.database();
            dataBase.ref(`/contatos/'${emailB64}`)
            .push({nome})
            .then(value => cadastroUsuarioSucesso(dispatch) )
            }
        )
        .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }
}

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch ({ type: CADASTRO_USUARIO_SUCESSO});
    Actions.boasvindas();
}

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch ({ type: CADASTRO_USUARIO_ERRO, payload: erro.message });
}

//função autentica usuario
export const autenticarUsuario = ({ email, senha }) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(value => loginUsuarioSucesso(dispatch))
        .catch(erro => loginUsuarioErro(erro, dispatch));
    }
}

const loginUsuarioSucesso = (dispatch) => {
    dispatch ({ type: LOGIN_USUARIO_SUCESSO});
    Actions.principal();
}

const loginUsuarioErro = (erro, dispatch) => {
    dispatch ({ type: LOGIN_USUARIO_ERRO, payload: erro.message });
}