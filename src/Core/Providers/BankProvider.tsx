import React, { useEffect, useState } from "react";
import { Bank, BankContextType } from "../@types/BankType";
import { BankListByCode, BanksListService } from "../Services/BankService";

export const BankContext = React.createContext<BankContextType | null>(null);

export const BankProvider = ({ children }: { children: React.ReactNode }) => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [bank, setBank] = useState<Bank[]>([]);

  const fetchBankLister = async () => {
    const response = await BanksListService();
    setBanks(response);
  };

  const fetchBank = async (code:string) => {
    const response = await BankListByCode(code)
    console.log(response)
  }

  useEffect(() => {
    fetchBankLister();
  }, []);

  return (
    <BankContext.Provider value={{ banks, fetchBank, bank}}>
      {children}
    </BankContext.Provider>
  );
};