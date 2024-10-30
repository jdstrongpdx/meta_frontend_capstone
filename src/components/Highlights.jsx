import {Button, Row, Col} from 'react-bootstrap'
import MenuCard from './MenuCard';

const Highlights = () => {
    return(
        <article>
            <Row>
                <Col>
                <h3>Specials</h3>
                </Col>
            <Col>
                <Button variant="dark" href="/">Button Link</Button>
        </Col>
            </Row>

            <Row>
                <MenuCard
                    src="image.jpg"
                    title="Delicious Dish"
                    text="This is a wonderful dish."
                    href="/order"
                    hrefText="Order Now"
                />

                <MenuCard
                    src="image.jpg"
                    title="Delicious Dish"
                    text="This is a wonderful dish."
                    href="/order"
                    hrefText="Order Now"
                />

                <MenuCard
                    src="image.jpg"
                    title="Delicious Dish"
                    text="This is a wonderful dish."
                    href="/order"
                    hrefText="Order Now"
                />

            </Row>
        </article>
    )
}

export default Highlights;
