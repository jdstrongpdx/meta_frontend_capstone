import { Row } from 'react-bootstrap'
import MenuCard from './MenuCard';

const Highlights = () => {
    return(
        <article>
            <h3>Specials</h3>
            <Row>
                <MenuCard 
                src="source" 
                title="title"
                text="text"
                href="href"
                hrefText="hrefText"
                />

            </Row>
        </article>
    )
}

export default Highlights;