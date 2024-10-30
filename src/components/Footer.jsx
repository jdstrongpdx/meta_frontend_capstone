import {Col, Row} from "react-bootstrap";

const Footer = () => {
    return(
        <footer style={{
            paddingTop: "2%",
            position: 'relative',
            left: '0',
            right: '0',
            backgroundColor: 'lightgray'}}>
            <Row>
                <Col>
                    <img src="/images/Logo.svg"
                         width="200px"
                         alt="Mario and Adrian Owners of Little Lemon"/>
                </Col>
                <Col>
                    <h6 >Navigation</h6>
                    <ul style={{ listStyleType: 'none'}}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </Col>
                <Col>
                    <h6>Contact</h6>
                    <ul style={{listStyleType: 'none'}}>
                        <li>Phone: 909-248-3433</li>
                        <li>Email: </li>
                        <li>Address: </li>
                        <li>Hours: </li>
                    </ul>
                </Col>
                <Col>
                    <h6>Navigation</h6>
                    <ul style={{listStyleType: 'none'}}>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Facebook</a></li>
                    </ul>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;
