import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

export const modificaEmail = (email) => {
    return {
        type: 'modifica_email',
        payload: email
    }
}

export const modificaSenha = (senha) => {
    return {
        type: 'modifica_senha',
        payload: senha
    }
}

export const modificaNome = (nome) => {
    return {
        type: 'modifica_nome',
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
    dispatch ({ type: 'cadastro_usuario_sucesso' });

    Actions.boasvindas();
}

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch ({ type: 'cadastro_usuario_erro', payload: erro.message });
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
    dispatch ({ type: 'login_usuario_sucesso' });
}

const loginUsuarioErro = (erro, dispatch) => {
    dispatch ({ type: 'cadastro_usuario_erro' });
}