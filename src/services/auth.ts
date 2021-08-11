import jwt from "jsonwebtoken";

export const TOKEN_KEY = "token_key_msd";
export const TOKEN_KEY_CAT = "token_key_catalogo";
export const DADOS_LOGIN = "dados_login_msd";
export const DADOS_LOGIN_CAT = "dados_login_catalogo";
export const TOKEN_REFRESH = "token_refresh_msd";
export const DADOS = "dados_msd";
export const CLIENTE_KEY = "cliente_key_msd";
export const CLIENTE_DOC = "cliente_cod_msd";
export const CLIENTE_PROF = "cliente_prof_msd";

type Authentications = {
  dados: Object;
  token: string;
};

export const isAuthenticated = () => {
  if (getToken() !== null) {
    const decoded = jwt.decode(getToken(), { complete: true });
    if (decoded !== null) {
      if (getRefresh() === "true") {
        const dadosToken = getDados();
        if (dadosToken !== null) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const getRefresh = () => localStorage.getItem(TOKEN_REFRESH);

export const getToken: string | any = () => localStorage.getItem(TOKEN_KEY);
export const set_Login = ({ token }: Authentications) => {
  localStorage.setItem(TOKEN_REFRESH, "true");
  localStorage.setItem(TOKEN_KEY, token);
};

export const getDados = () =>
  JSON.parse(localStorage.getItem(DADOS_LOGIN) || "{}");

export const set_Dados = ({ dados }: Authentications) => {
  localStorage.setItem(DADOS_LOGIN, JSON.stringify(dados));
};
