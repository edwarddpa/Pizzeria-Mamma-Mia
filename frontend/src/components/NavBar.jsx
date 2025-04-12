import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { GlobalContext } from '../context/GlobalContext';
import toast from 'react-hot-toast';



const NavBar = () => {

    const { userIsLogged, user, setUser, setUserIsLogged} = useContext(GlobalContext)
    const { cart, precioTotal} = useContext(CartContext)
    const navegar = useNavigate
    const handleLogout = () => {
      setUser(null)
      setUserIsLogged(false)
      navegar("/")
    }

    const handleProfile = (e) => {
      toast.error("Para acceder a tu perfil necesitas iniciar sesión")

    }

  return (

    
    <div>
        <Navbar expand="lg"  bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand><Link to="/" className='text-white link-underline-dark'>Pizzería Mamma Mía</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className='btn btn-outline-light link-underline-dark pt-2 me-2'>🍕Home</Link> 
            {!userIsLogged  &&
                <div className='d-flex'><Nav.Link><Link to="/login" className='text-secondary-emphasis link-underline-dark'>🔐Login</Link></Nav.Link>
                <Nav.Link href="#"><Link to="/register" className='text-secondary-emphasis link-underline-dark'>🔐Register</Link></Nav.Link></div>
            }
            
          </Nav>
          <Nav className="justify-content-end">
          <Link to="/cart" className='btn btn-outline-info'>🛒Total: ${precioTotal}</Link>
          {!userIsLogged &&
              <Link to="/profile" className='btn btn-outline-warning ms-2' onClick={handleProfile}>Profile</Link>
            }
          {userIsLogged && (
            <>
             <Link to="/profile" className='btn btn-outline-warning ms-2'>Profile</Link>
              <div className='d-flex'>
                <Nav.Link href="#" className="btn btn-outline-danger ms-2 " onClick={() => handleLogout()}><b className='font-weight-bold'><i class="fa-solid fa-right-from-bracket"></i> Salir</b></Nav.Link>
              </div>
               </>   
          )
        }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default NavBar
