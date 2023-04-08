import React from "react";
import { BankContext } from "../Providers/BankProvider";
import { BankContextType } from "../@types/BankType";

// Define um hook personalizado chamado useBank
export default function useBank() {
  // Utiliza o hook useContext do React para acessar o contexto BankContext
  const context = React.useContext(BankContext) as BankContextType;
  // Retorna o valor do contexto tipado como BankContextType
  return context;
}
