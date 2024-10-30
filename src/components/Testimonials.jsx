import TestimonialCard from "./TestimonialCard";
import {Row} from "react-bootstrap";
import { IoIosStar } from "react-icons/io";

const Testimonials = () => {
    return(
        <article className="Testimonials p-4">
            <Row>
                <h1 className="TestimonialHeader">Testimonials</h1>
            </Row>

            <Row>
                <TestimonialCard
                    stars="4"
                    src="/images/profile1.jpg"
                    user="Selena G."
                    review="Really enjoyed the atmosphere."
                    />
                <TestimonialCard
                    stars="5"
                    src="/images/profile2.jpg"
                    user="Brandon M."
                    review="The greek salad was excellent!"
                />
                <TestimonialCard
                    stars="5"
                    src="/images/profile3.jpg"
                    user="Peter R."
                    review="You have to try the Greek Salad!"
                />
                <TestimonialCard
                    stars="5"
                    src="/images/profile4.jpg"
                    user="Hailey J."
                    review="Awesome place peaceful atmosphere with delicious food"
                />
            </Row>
        </article>
    )
}

export default Testimonials;
