import {Card, Col, Container} from 'react-bootstrap'
import {IoIosStar} from "react-icons/io";

const TestimonialCard = ({ stars, user, src, review }) => {
    return (
        <Col xs={12} sm={6} md={3}>
            <Card className="TestimonialCard">
                <Card.Body>
                    <Container className="TestimonialStars">
                    {Array.from({ length: Number(stars) }, (_, index) => (
                        <IoIosStar key={index} />
                    ))}
                    </Container>
                    <Card.Img variant="top" src={src} style={{borderRadius: 500}} />
                    <Card.Text className="mt-2 font-weight-bold">{user}</Card.Text>
                    <Card.Text>{review}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TestimonialCard;
