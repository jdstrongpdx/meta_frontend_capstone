import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';

const Header = () => {
    const expand = 'lg';

    return (
        <header>
            <Navbar key={expand} expand={expand} bg="body-tertiary" className="mb-3">
                <Container className="d-flex justify-content-between align-items-center">
                    <img src="/images/Logo.svg" alt="Little Lemon Logo"/>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>

                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Little Lemon
                            </Offcanvas.Title>
                            <img src="/images/Logo.svg" alt="Little Lemon Logo"/>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="flex-grow-1 justify-content-center" style={{ fontSize: '20px', fontWeight: 'bold' }}>
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
        </header>
    );
};

export default Header;
