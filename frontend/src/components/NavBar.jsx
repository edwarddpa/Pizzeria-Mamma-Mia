import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';



const NavBar = () => {
    const total = 25000
    const formattedTotal = total.toLocaleString('es-ES'); // Formatear el total
    const token = false

  return (

    
    <div>
        <Navbar expand="lg"  bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Pizzería Mamma Mía</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Button variant="outline-light">🍕Home</Button>
            {token == true ?
                <><Nav.Link href="#">🔓Profile</Nav.Link>
                <Nav.Link href="#">🔒Logout</Nav.Link></>
            :
                <><Nav.Link href="#">🔐Login</Nav.Link>
                <Nav.Link href="#">🔐Register</Nav.Link></>
            }
          </Nav>
          <Nav className="justify-content-end">
          <Button variant="outline-info">🛒Total: ${formattedTotal}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default NavBar
