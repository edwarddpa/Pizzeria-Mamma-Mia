import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { GlobalContext } from '../context/GlobalContext';
import { UserContext } from '../context/UserContext';
import toast from 'react-hot-toast';



const NavBar = () => {

    const { user, setUser} = useContext(GlobalContext)
    const { token, setToken} = useContext(UserContext)
    const { cart, precioTotal} = useContext(CartContext)
    const navegar = useNavigate()
    const handleLogout = () => {
      setUser(null)
      setToken(false)
      navegar("/")
    }

    const handleProfile = (e) => {
      toast.error("Para acceder a tu perfil necesitas iniciar sesión")

    }

    const changeActive = ({ isActive}) => (isActive ? "text-success" : "text-secondary-emphasis link-underline-dark")

  return (

    
    <div>
        <Navbar expand="lg"  bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Brand><Link to="/" className='text-white link-underline-dark'>Pizzería Mamma Mía</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to="/" className='btn btn-outline-light link-underline-dark pt-2 me-2'>🍕Home</Link> 
            {!token  &&
                <div className='d-flex'><Nav.Link><NavLink to="/login" className={changeActive}>🔐Login</NavLink></Nav.Link>
                <Nav.Link href="#"><NavLink to="/register" className={changeActive}>🔐Register</NavLink></Nav.Link></div>
            }
            
          </Nav>
          <Nav className="justify-content-end">
          <Link to="/cart" className='btn btn-outline-info'>🛒Total: ${precioTotal}</Link>
          {!token &&
              <Link to="/profile" className='btn btn-outline-warning ms-2' onClick={handleProfile}>Profile</Link>
            }
          {token && (
            <>
             <Link to="/profile" className='btn btn-outline-warning ms-2'>Profile</Link>
              <div className='d-flex'>
                <Nav.Link href="#" className="btn btn-outline-danger ms-2 " onClick={() => handleLogout()}><b className='font-weight-bold'><i class="fa-solid fa-right-from-bracket"></i> Logout</b></Nav.Link>
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
