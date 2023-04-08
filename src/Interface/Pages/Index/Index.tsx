import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import AccountList from "./Components/AccountList";

const Index = () => {
  return (
    <Container>
       <Header/>
       <AccountList/>
    </Container>
  );
};

export default Index;
