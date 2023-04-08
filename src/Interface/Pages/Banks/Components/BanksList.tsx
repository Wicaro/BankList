import useBank from "@/Core/Hooks/BankHook";
import { Button, Card, Col, FormGroup, Row } from "react-bootstrap";
import {
  ButtonCreate,
  ButtonNext,
  ButtonPrev,
  CardBody,
  FormControl,
} from "../Style/BankStyle";
import { Bank } from "@/Core/@types/BankType";
import { useState } from "react";

const ItemsPerPage = 12;

const BankList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchCode, setSearchCode] = useState("");
    const { banks } = useBank();
    
    const TotalPages = Math.ceil(banks?.length / ItemsPerPage);
    
    const StartPage = (currentPage - 1) * ItemsPerPage;
    const EndPage = StartPage + ItemsPerPage;
    let BanksList = banks.slice(StartPage, EndPage);
    
    if (searchCode !== "") {
      BanksList = BanksList.filter((bank) => bank.code === parseInt(searchCode));
    }
    
    const handleClick = (pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
    
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchCode(event.target.value);
    };
    
    return (
      <>
        <Row>
          <Col md={8}>
            <p className="mt-5">Página: {currentPage}</p>
          </Col>
          <Col md={4}>
            <FormGroup>
              <FormControl
                placeholder="Pesquise por um banco: Ex: 70"
                className="form-control mt-5"
                value={searchCode}
                onChange={handleSearch}
                type="number"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-1">
          {BanksList?.map((item: Bank) => (
            <Col md={4} className="mt-3">
              <Card style={{ border: "0px" }}>
                <CardBody>
                  <p>
                    Banco: {item.fullName} - Code {item.code}
                  </p>
                  <p>ISPB: {item.ispb}</p>
                  <p>Nome: {item.name}</p>
                  <ButtonCreate>Criar minha conta</ButtonCreate>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
    
        <div className="mt-5">
          <center>
            <ButtonPrev
              onClick={() => handleClick(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </ButtonPrev>
            <ButtonNext
              onClick={() => handleClick(currentPage + 1)}
              disabled={currentPage === TotalPages}
            >
              Próximo
            </ButtonNext>
          </center>
        </div>
        <br />
      </>
    );    
};

export default BankList;
