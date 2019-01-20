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