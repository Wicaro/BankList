export type Bank = {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
};

export type BankContextType = {
  banks: Bank[];
};