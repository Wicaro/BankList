import React from "react";
import { BankContextType } from "../@types/BankType";

export const BankContext = React.createContext<BankContextType | null>(null);

export const BankProvider = ({children}: {children: React.ReactNode}) => {

  return (
    <BankContext.Provider value={{}}>{children}</BankContext.Provider>
  );
};