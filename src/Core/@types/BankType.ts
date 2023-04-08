export type Bank = {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
};

export type BankContextType = {
  banks: Bank[];
  fetchBank: (code:string) => void
  bank: Bank[]
};