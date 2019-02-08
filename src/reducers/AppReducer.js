import {
  MODIFICA_ADICIONA_CONTATO_EMAIL,
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  LISTA_CONTATO_USUARIO
} from "../actions/Types";

const INITIAL_STATE = {
  adiciona_contato_email: "",
  erroCadastro: "",
  cadastroResultadoInclusao: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_ADICIONA_CONTATO_EMAIL:
      return { ...state, adiciona_contato_email: action.payload };
    case ADICIONA_CONTATO_ERRO:
      return { ...state, erroCadastro: action.payload };
    case ADICIONA_CONTATO_SUCESSO:
      return {
        ...state,
        cadastroResultadoInclusao: action.payload,
        adiciona_contato_email: ""
      };
    default:
      return state;
  }
};
