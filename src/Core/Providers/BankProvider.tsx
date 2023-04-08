import React, { useEffect, useState } from "react";
import { Bank, BankContextType } from "../@types/BankType";
import { BankListByCode, BanksListService } from "../Services/BankService";

// Cria um contexto para o componente filho que irá utilizar as informações bancárias
export const BankContext = React.createContext<BankContextType | null>(null);

// Componente pai que prove as informações bancárias para os filhos através do contexto
export const BankProvider = ({ children }: { children: React.ReactNode }) => {
  // Armazena as informações de bancos
  const [banks, setBanks] = useState<Bank[]>([]);
  // Armazena as informações do banco selecionado
  const [bank, setBank] = useState<Bank | null>(null);

  // Função para buscar a lista de bancos
  const fetchBankLister = async () => {
    const response = await BanksListService();
    setBanks(response);
  };

  // Função para buscar as informações de um banco pelo código
  const fetchBank = async (code:string) => {
    const response = await BankListByCode(code)
    setBank(response)
  }

  // Busca a lista de bancos na montagem do componente
  useEffect(() => {
    fetchBankLister();
  }, []);

  // Renderiza o contexto com as informações dos bancos e a função para buscar um banco pelo código
  return (
    <BankContext.Provider value={{ banks, fetchBank, bank}}>
      {children}
    </BankContext.Provider>
  );
};
