import useBank from "@/Core/Hooks/BankHook";
import { Card, Col, Pagination, Row } from "react-bootstrap";
import { ButtonNext, ButtonPrev, CardBody } from "../Style/BankStyle";
import { Bank } from "@/Core/@types/BankType";
import { useState } from "react";

const ItemsPerPage = 12;

const BankList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { banks } = useBank();
  const TotalPages = Math.ceil(banks.length / ItemsPerPage);

  const StartPage = (currentPage - 1) * ItemsPerPage;
  const EndPage = StartPage + ItemsPerPage;
  const BanksList = banks.slice(StartPage, EndPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <p className="mt-5">Página: {currentPage}</p>
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
    </>
  );
};

export default BankList;
