import useBank from "@/Core/Hooks/BankHook";
import { useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  CardBody,
  ButtonCreate,
  BorderDiv,
  FormControl,
} from "../Style/BankStyle";

const BankCreate = () => {
  const { code } = useParams();
  const { bank, fetchBank } = useBank();
  const [agency, setAgency] = useState("");
  const [account, setAccount] = useState("");

  useEffect(() => {
    fetchBank(`${code}`);
  }, []);

  const handleCreateAccount = () => {
    if (agency && account) {
      const data = {
        agency,
        account,
      };
      localStorage.setItem("bankAccount", JSON.stringify(data));
      alert("Conta bancária criada com sucesso!");
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <Col md={4} className="mt-3">
      <BorderDiv>
        <p>
          Banco: {bank?.fullName} - Code {bank?.code}
        </p>
        <p>ISPB: {bank?.ispb}</p>
        <p>Nome: {bank?.name}</p>
      </BorderDiv>
      <div className="mt-5">
        <p>Preenchar suas informações</p>

        <label className="mt-3">Agência</label>
        <FormControl
          placeholder="Digite sua agência"
          className="form-control mt-2"
          type="text"
          value={agency}
          onChange={(e) => setAgency(e.target.value)}
        />
        <label className="mt-3">Conta</label>
        <FormControl
          placeholder="Digite sua conta"
          className="form-control mt-1"
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />

        <ButtonCreate className="mt-4" onClick={handleCreateAccount}>
          Criar minha conta bancária
        </ButtonCreate>
      </div>
    </Col>
  );
};

export default BankCreate;
