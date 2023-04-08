import axios from "axios";

const BASE_URL = "https://brasilapi.com.br/api/banks/v1/";

export const BanksListService = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const BankListByCode = async (code: number) => {
    try {
        const response = await axios.get(`${BASE_URL}${code}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
