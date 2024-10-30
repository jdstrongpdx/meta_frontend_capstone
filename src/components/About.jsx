import {Col, Row} from "react-bootstrap";

const About = () => {
    return(
        <article>
            <Row>
                <Col>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Description...</p>
                </Col>
                <Col>
                    <img src="/images/Mario%20and%20Adrian%20A.jpg"
                         width="250px"
                         alt="Mario and Adrian Owners of Little Lemon"/>
                    <img src="/images/Mario%20and%20Adrian%20b.jpg"
                         width="250px"
                         alt="Mario and Adrian Owners of Little Lemon"/>
                </Col>

            </Row>
        </article>
    )
}

export default About;
