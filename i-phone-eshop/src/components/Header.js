
// const Header = () => {
//   return ( 
//     <div>HEADER</div>
//    );
// }
 
// export default Header
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css'

function Header() {
  return (
    <>
     
          
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className='text-lg' href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;