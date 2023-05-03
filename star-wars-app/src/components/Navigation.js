import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Logo from '../assets/MF.png';

function Navigation() {
  return (
    <Navbar bg='dark' variant='dark' className='mb-4'>
      <Container>
        <Navbar.Brand>
          <Image src={Logo} width='60' height='50' className='me-2' />
          Star Wars
        </Navbar.Brand>

        <Nav className='me-auto'>
          <Nav.Link>
            <NavLink to='/' className='me-4'>Home</NavLink>
            <NavLink to='/films' className='me-4'>Films</NavLink>
            <NavLink to='/people' className='me-4'>People</NavLink>
            <NavLink to='/species' className='me-4'>Species</NavLink>
            <NavLink to='/planets' className='me-4'>Planets</NavLink>
            <NavLink to='/starships' className='me-4'>Starships</NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Navigation };