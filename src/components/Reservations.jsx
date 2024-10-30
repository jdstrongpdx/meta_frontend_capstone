import {useState} from "react";
import {Col, Form, Row} from "react-bootstrap";

const Reservations = () => {
    const [formValues, setFormValues] = useState({});
    const [submitting, setSubmitting] = useState({});
    const [page, setPage] = useState(1);

    const handleChange = (e) => {
        e.preventDefault()
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }


    return (
        <Form>
            <Row>
                {/* Left Column */}
                <Col xs={12} md={6}>
                    <Form.Group controlId="formIndoor">
                        <Form.Check
                            type="radio"
                            name="diningLocation"
                            label="Indoor"
                            value="indoor"
                            className="mb-3"
                        />
                    </Form.Group>

                    <Form.Group controlId="formDate" className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>

                    <Form.Group controlId="formOccasion" className="mb-3">
                        <Form.Label>Occasion</Form.Label>
                        <Form.Control type="text" placeholder="Birthday, Anniversary..." />
                    </Form.Group>
                </Col>

                {/* Right Column */}
                <Col xs={12} md={6}>
                    <Form.Group controlId="formOutdoor">
                        <Form.Check
                            type="radio"
                            name="diningLocation"
                            label="Outdoor"
                            value="outdoor"
                            className="mb-3"
                        />
                    </Form.Group>

                    <Form.Group controlId="formDiners" className="mb-3">
                        <Form.Label>Number of Diners</Form.Label>
                        <Form.Control type="number" min="1" placeholder="Enter number" />
                    </Form.Group>

                    <Form.Group controlId="formTime" className="mb-3">
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="time" />
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
};

export default Reservations;
