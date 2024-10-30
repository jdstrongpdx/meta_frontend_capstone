import TestimonialCard from "./TestimonialCard";
import {Row} from "react-bootstrap";

const Testimonials = () => {
    return(
        <article>
            <Row>
                <TestimonialCard
                    stars="stars"
                    src="source"
                    profile="profile"
                    review="review"
                    />
                <TestimonialCard
                    stars="stars"
                    src="source"
                    profile="profile"
                    review="review"
                />
                <TestimonialCard
                    stars="stars"
                    src="source"
                    profile="profile"
                    review="review"
                />
                <TestimonialCard
                    stars="stars"
                    src="source"
                    profile="profile"
                    review="review"
                />
            </Row>
        </article>
    )
}

export default Testimonials;
