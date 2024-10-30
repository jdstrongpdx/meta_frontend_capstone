import {Row, Col, Container} from 'react-bootstrap'
import RoundedButton from "./RoundedButton";
import {colors} from "../utility/colors";

const Hero = () => {
    return(
        <div style={{
            backgroundColor: colors.primaryGreen,
            height: '400px',
            marginBottom: '100px'
        }}>
            <Container>
        <Row>
            <Col xs={12} md={6}>
                <header style={{
                    textAlign: "left",
                    color: "white",
                    marginTop: "15px",
                    width: "80%",
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <h1 style={{
                        color: colors.primaryYellow,
                        fontSize: "64pt",
                        fontFamily: "Markazi Text",
                    }}>Little Lemon</h1>
                    <h3 style={{
                        fontSize: "40pt",
                        fontFamily: "Markazi Text"
                    }}>Chicago</h3>
                    <p style={{
                        fontSize: "16pt"
                    }}>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <RoundedButton linkHref="/reservations" title="Reserve a Table"/>
                </header>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-between align-items-center">
                <img src="/images/restauranfood.jpg"
                     width="500px"
                     alt="Little Lemon Logo"
                     style = {{
                         width: "80%",
                         maxWidth: '300px',
                         marginLeft: 'auto',
                         marginRight: 'auto',
                         marginTop: "25px",
                         borderRadius: "10%",
                         marginBottom: "1%"
                     }}
                ></img>
            </Col>
        </Row>
                </Container>
        </div>
    )
}

export default Hero;
