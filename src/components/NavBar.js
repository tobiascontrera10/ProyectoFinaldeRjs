import { Container, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mejorando</Navbar.Brand>
          <CartWidget/>
        </Container>
      </Navbar>
        </>
        
    )
}
export default NavBar;