import { Card, Col, Button } from 'react-bootstrap'

const MenuCard = (src, title, text, href, hrefText) => {
    return(
        <Col>
            <Card>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {text}
                    </Card.Text>
                    <Button variant="primary" href={href}>{hrefText}</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default MenuCard;