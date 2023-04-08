import { AccountBank } from "@/Core/@types/BankType";
import React from "react";

const AccountList = () => {
  // Obtém o array de contas bancárias cadastradas do localStorage
  const bankAccounts = JSON.parse(localStorage.getItem("bankAccounts") ?? "[]");

  // Verifica se o array de contas bancárias cadastradas está vazio
  if (bankAccounts.length === 0) {
    return (
      <div className="mt-5">
        <p>Contas bancárias cadastradas:</p>
        <small className="text-danger">Nenhuma conta cadastrada</small>
      </div>
    );
  }
  
  return (
    <div className="mt-5">
      <p>Contas bancárias cadastradas:</p>
      <ul>
        {bankAccounts.map((bankAccount:AccountBank, index:number) => (
          <li key={index}>
            <p>Código do Banco: {bankAccount.code}</p>
            <p>Agência: {bankAccount.agency}</p>
            <p>Conta: {bankAccount.account}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
