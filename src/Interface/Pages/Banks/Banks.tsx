import { BankProvider } from "@/Core/Providers/BankProvider";
import { Button, Container } from "react-bootstrap";
import BankList from "./Components/BanksList";
import { Link } from "react-router-dom";

const Banks = () => {
  return (
   <BankProvider>
      <Container>
        <p className="mt-5">Listagem dos bancos</p>
        <Link to="/">
            <Button className="primary">Voltar</Button>
        </Link>
        <div className="mt-3">
            <BankList/>
        </div>
      </Container>
   </BankProvider>
  );
};

export default Banks;
