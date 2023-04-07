import axios from "axios";

const options = { method: "GET", url: "https://brasilapi.com.br/api/banks/v1" };

export const BanksListService = async () =>
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
