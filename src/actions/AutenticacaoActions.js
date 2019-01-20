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

    let usuario = firebase.auth();
    usuario.createUserWithEmailAndPassword(
        email,
        senha
    )
    .then(user => console.log(user))
    .catch(erro => console.log(erro));

    return {
        type: 'teste'
    }
}