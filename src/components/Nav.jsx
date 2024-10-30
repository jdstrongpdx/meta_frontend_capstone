import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap'

function NavBar() {
    const expand = 'md'
  return (
    <>
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Little Lemon</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/menu">Menu</Nav.Link>
                  <Nav.Link href="/reservations">Reservations</Nav.Link>
                  <Nav.Link href="/order">Order Online</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;