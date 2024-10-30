import {Button, Row, Col, Container} from 'react-bootstrap'
import MenuCard from './MenuCard';
import RoundedButton from "./RoundedButton";

const Highlights = () => {
    return(
        <Container className="Highlights">
            <Row className="align-items-center justify-content-between">
                <Col xs="auto">
                    <h2>This Week's Specials!</h2>
                </Col>
                <Col xs="auto">
                    <RoundedButton title="Online Menu" linkHref="/order" />
                </Col>
            </Row>

            <Row className="Menu mt-4">
                <MenuCard
                    src="/images/greek%20salad.jpg"
                    title="Greek salad"
                    text="The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary crutons.."
                    price="$12.99"
                />

                <MenuCard
                    src="/images/bruchetta.svg"
                    title="Bruchetta"
                    text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    price="$5.99"
                />

                <MenuCard
                    src="/images/lemon%20dessert.jpg"
                    title="Lemon Dessert"
                    text="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    price="$5.00"
                />

            </Row>
        </Container>
    )
}

export default Highlights;
