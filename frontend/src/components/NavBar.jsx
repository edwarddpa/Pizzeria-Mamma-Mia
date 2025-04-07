import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const NavBar = () => {
    const total = 25000
    const formattedTotal = total.toLocaleString('es-ES'); // Formatear el total
    const token = false

  return (

    
    <div>
        <Navbar expand="lg"  bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand><Link to="/" className='text-white link-underline-dark'>Pizzería Mamma Mía</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className='btn btn-outline-light link-underline-dark pt-2'>🍕Home</Link>
            {token == true ?
                <div className='d-flex'><Link to="/profile"><Nav.Link  >🔓Profile</Nav.Link></Link>
                <Link to="/logout"><Nav.Link href="#">🔒Logout</Nav.Link></Link></div>
            :
                <div className='d-flex'><Nav.Link><Link to="/login" className='text-secondary-emphasis link-underline-dark'>🔐Login</Link></Nav.Link>
                <Nav.Link href="#"><Link to="/register" className='text-secondary-emphasis link-underline-dark'>🔐Register</Link></Nav.Link></div>
            }
          </Nav>
          <Nav className="justify-content-end">
          <Link to="/cart" className='btn btn-outline-info'>🛒Total: ${formattedTotal}</Link>
          <Link to="/profile" className='btn btn-outline-warning ms-2'>Profile</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default NavBar
