import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Carrito from './CartWidget';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';

const Navbarra = () => {
 return (
  <div>
  
  <Navbar bg="light" variant="light">
    <Container>
    <ItemCount/>
    <Carrito />
    <Navbar.Brand href="#home">mi Tienda</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Productos</Nav.Link>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success"> Search </Button>
        
      </Form>
      </Nav>
      </Container>
      </Navbar>
   
      
  </div>  
 
 )}


export default Navbarra;