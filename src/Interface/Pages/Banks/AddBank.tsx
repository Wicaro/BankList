import { BankProvider } from "@/Core/Providers/BankProvider";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BankCreate from "./Components/BankCreate";
import { Container } from "react-bootstrap";

const AddBank = () => {
  return (
    <BankProvider>
      <Container>
        <p className="mt-5">Crie uma conta no banco selecionado</p>
        <BankCreate />
      </Container>
    </BankProvider>
  );
};

export default AddBank;
