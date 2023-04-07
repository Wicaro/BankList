import axios from "axios";

const options = { method: "GET", url: "https://brasilapi.com.br/api/banks/v1" };

export const BanksListService = async () =>
  axios
    .request(options)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.error(error);
    });
