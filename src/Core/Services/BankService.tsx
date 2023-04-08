import axios from "axios";

// Opções de requisição para a lista de bancos
const options = { method: "GET", url: "https://brasilapi.com.br/api/banks/v1" };

/**
 * Função que busca a lista de bancos
 * @returns Promise com a lista de bancos
 */
export const BanksListService = async () =>
  axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

/**
 * Função que busca as informações de um banco específico a partir do seu código
 * @param code Código do banco
 * @returns Promise com as informações do banco
 */
export const BankListByCode = async (code: string) =>
  axios
    .request({ ...options, url: `https://brasilapi.com.br/api/banks/v1/${code}` })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

// Obs: As URLs de requisição foram repetidas pois há um problema de CORS caso sejam utilizadas usando BASE_URL
