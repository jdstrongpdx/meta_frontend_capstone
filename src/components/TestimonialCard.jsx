import { Card, Col } from 'react-bootstrap'

const TestimonialCard = ({ stars, profile, src, review }) => {
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Text>{stars}</Card.Text>
                    <Card.Img variant="top" src={src} />
                    <Card.Text>{profile}</Card.Text>
                    <Card.Text>{review}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TestimonialCard;
