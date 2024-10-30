import {Col, Row} from "react-bootstrap";

const Footer = () => {
    return(
        <footer>
            <Row>
                <Col>
                    <img src="/images/Mario%20and%20Adrian%20b.jpg"
                         width="250px"
                         alt="Mario and Adrian Owners of Little Lemon"/>
                </Col>
                <Col>
                    <p>Doormat Navigation</p>
                </Col>
                <Col>
                    <p>Contact</p>
                </Col>
                <Col>
                    <p>Social Media Links</p>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;
