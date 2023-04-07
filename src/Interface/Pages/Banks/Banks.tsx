import { BankProvider } from "@/Core/Providers/BankProvider";
import { Container } from "react-bootstrap";
import BankList from "./Components/BanksList";

const Banks = () => {
  return (
   <BankProvider>
      <Container>
        <p className="mt-5">Listagem dos bancos</p>
        <div className="mt-3">
            <BankList/>
        </div>
      </Container>
   </BankProvider>
  );
};

export default Banks;
