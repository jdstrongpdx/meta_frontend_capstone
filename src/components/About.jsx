import {Col, Row} from "react-bootstrap";

const About = () => {
    return(
        <article>
            <Row>
                <Col>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Welcome to our family-owned Mediterranean restaurant, where tradition meets innovation. We take pride in serving authentic Mediterranean dishes, carefully crafted from cherished family recipes passed down through generations. Each meal is prepared with the freshest ingredients, ensuring that every bite bursts with flavor. Our menu features traditional favorites, all served with a modern twist, creating a dining experience that is both comforting and exciting. Whether you’re here for a special occasion or a casual meal, we invite you to join us in celebrating the rich culinary heritage of the Mediterranean. Experience the warmth of our family as you enjoy dishes that reflect our passion for food and hospitality.</p>
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
