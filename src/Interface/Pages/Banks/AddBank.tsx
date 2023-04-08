import { BankProvider } from "@/Core/Providers/BankProvider";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BankAccountCreation from "./Components/BankAccountCreation";
import { Button, Container } from "react-bootstrap";

const AddBank = () => {
  return (
    <BankProvider>
      <Container>
        <p className="mt-5">Crie uma conta no banco selecionado</p>
        <Link to="/banks">
            <Button className="primary">Voltar</Button>
        </Link>
        <BankAccountCreation />
      </Container>
    </BankProvider>
  );
};

export default AddBank;
