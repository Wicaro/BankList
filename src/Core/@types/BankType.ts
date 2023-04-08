export type Bank = {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
};

export type AccountBank = {
  code: number;
  agency:string;
  account:string;
}


export type BankContextType = {
  banks: Bank[];
  fetchBank: (code:string) => void
  bank: Bank | null; // alteração aqui
};