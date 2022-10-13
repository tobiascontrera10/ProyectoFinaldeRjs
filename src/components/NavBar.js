import { Container, Navbar, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>
            Productos
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>
              home
            </Nav.Link>
            <Nav.Link as={Link} to='/category/infoUno'>infoUno</Nav.Link>
            <Nav.Link as={Link} to='/category/infoDos'>infoDos</Nav.Link>
            <Nav.Link as={Link} to='/category/infoTres'>infoTres</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
        
    )
}
export default NavBar;