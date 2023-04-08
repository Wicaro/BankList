import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ButtonRedirectToCreatePage } from "../Style/IndexStyle";

const Header = () => {
  return (
    <>
      <h4 className="mt-5">Seja bem-vindo(a) ao Banker</h4>
      <Link to="/banks">
        <ButtonRedirectToCreatePage className="mt-2">
          Cadastrar uma conta bancária
        </ButtonRedirectToCreatePage>
      </Link>
    </>
  );
};

export default Header;
