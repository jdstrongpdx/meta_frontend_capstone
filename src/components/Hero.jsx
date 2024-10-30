import { Row, Col, Button } from 'react-bootstrap'

const Hero = () => {
    return(
        <Row>
            <Col>
                <article>
                    <section>
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>
                            Text Here...
                        </p>
                        <Button variant="dark" href="/reservations">Reserve a Table</Button>
                    </section>

                </article>
            </Col>
            <Col>
                <img src="/images/Logo.svg" alt="Little Lemon Logo"></img>
            </Col>
        </Row>
    )
}

export default Hero;
