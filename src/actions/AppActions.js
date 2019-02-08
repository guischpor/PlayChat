import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import Toast from "react-native-root-toast";
import b64 from "base-64";
import _ from "lodash";
import {
  MODIFICA_ADICIONA_CONTATO_EMAIL,
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  LISTA_CONTATO_USUARIO
} from "./Types";

export const modificaAdiconaContatoEmail = email => {
  return {
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: email
  };
};

export const adicionaContato = email => {
  return dispatch => {
    let emailB64 = b64.encode(email);
    firebase
      .database()
      .ref(`/contatos/${emailB64}`)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          //email do contato que existe
          const dadosUsuario = _.first(_.values(snapshot.val()));
          console.log(dadosUsuario);

          const { currentUser } = firebase.auth();
          let emailUsuario64 = b64.encode(currentUser.email);
          firebase
            .database()
            .ref(`/usuario_contatos/${emailUsuario64}`)
            .push({ email, nome: dadosUsuario.nome })
            .then(() => adicionaContatoSucesso(dispatch))
            .catch(() => adicionaContatoErro(erro.message, dispatch));
        } else {
          dispatch({
            type: ADICIONA_CONTATO_ERRO,
            payload: "Email informado não corresponde a um usuário válido!"
          });
        }
      });
  };
};

const adicionaContatoErro = (erro, dispatch) =>
  dispatch({
    type: ADICIONA_CONTATO_ERRO,
    payload: erro
  });

const adicionaContatoSucesso = dispatch =>
  dispatch({
    type: ADICIONA_CONTATO_SUCESSO,
    payload: true
  });

export const habilitaInclusaoContato = () => ({
  type: ADICIONA_CONTATO_SUCESSO,
  payload: false
});

export const contatoUsuarioFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    let emailUsuarioB64 = b64.encode(currentUser.email);
    firebase
      .database()
      .ref(`/usuario_contatos/${emailUsuarioB64}`)
      .on("value", snapshot => {
        dispatch({ type: LISTA_CONTATO_USUARIO, payload: snapshot.val() });
      });
  };
};
