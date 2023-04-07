import React, { useEffect, useState } from "react";
import { Bank, BankContextType } from "../@types/BankType";
import { BanksListService } from "../Services/BankService";

export const BankContext = React.createContext<BankContextType | null>(null);

export const BankProvider = ({ children }: { children: React.ReactNode }) => {
  const [banks, setBanks] = useState<Bank[]>([]);

  const fetchBankLister = async () => {
    const response = await BanksListService();
    setBanks(response);
  };

  useEffect(() => {
    fetchBankLister();
  }, []);

  return (
    <BankContext.Provider value={{ banks }}>
      {children}
    </BankContext.Provider>
  );
};