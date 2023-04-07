import React from "react";
import { BankContext } from "../Providers/BankProvider";
import { BankContextType } from "../@types/BankType";

export default function useBank(){
    const context = React.useContext(BankContext) as BankContextType
    return context
}