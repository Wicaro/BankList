export type Bank = {
  ispb: string; // Código do banco no sistema de Pagamentos Brasileiros
  name: string; // Nome do banco
  code: number; // Código do banco
  fullName: string; // Nome completo do banco
};

export type AccountBank = {
  code: number; // Código do banco
  agency:string; // Número da agência bancária
  account:string; // Número da conta bancária
}

export type BankContextType = {
  banks: Bank[]; // Lista de bancos disponíveis
  fetchBank: (code:string) => void; // Função para buscar dados de um banco pelo código
  bank: Bank | null; // Dados do banco selecionado ou null se nenhum banco foi selecionado
};
