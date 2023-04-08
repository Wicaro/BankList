const Body = () => {
    const bankAccount = JSON.parse(localStorage.getItem("bankAccount") ?? "null");
  
    if (!bankAccount) {
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
          <li>Código do Banco: {bankAccount.code}</li>
          <li>Agência: {bankAccount.agency}</li>
          <li>Conta: {bankAccount.account}</li>
        </ul>
      </div>
    );
  };
  
  export default Body;
  