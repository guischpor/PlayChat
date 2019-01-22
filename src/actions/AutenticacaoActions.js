import firebase from 'firebase';

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

export const cadastraUsuario = (nome, email, senha) => {
    return dispatch => {
        let usuario = firebase.auth();
        usuario.createUserWithEmailAndPassword(
            email,
            senha
        )
        .then(user => cadastraUsuarioSucesso(user, dispatch))
        .catch(erro => cadastraUsuarioErro(erro, dispatch));
    }
}

const cadastraUsuarioSucesso = (user, dispatch) => {
    dispatch (
        { type: 'sucesso' }
    );
}

const cadastraUsuarioErro = (erro, dispatch) => {
    dispatch (
        {
            type: 'cadastro_usuario_erro',
            payload: erro.message
        }
    );
}