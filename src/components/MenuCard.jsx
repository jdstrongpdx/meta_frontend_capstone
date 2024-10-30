import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import {colors} from "../utility/colors";

const MenuCard = ({ src, title, text, price }) => {
    return (
        <Col xs={12} lg={4}>
            <Card
                className="MenuCard"
                style={{
                    width: "300px",
                    height: "500px",
                    backgroundColor: colors.secondaryGrey,
                    marginBottom: "5%"
                }}
            >
                <div style={{
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifContent: "center"
                }}>
                    <Card.Img src={src} />
                </div>
                <Card.Body>
                    <Row
                        className="align-items-center mb-2"
                        style={{
                            fontFamily: "Markazi Text",
                            fontSize: "18pt",
                            fontWeight: "900"
                        }}
                    >
                        <Col>
                            <span>{title}</span>
                        </Col>
                        <Col className="text-end">
                            <span style={{ color: colors.secondaryOrange }}>{price}</span>
                        </Col>
                    </Row>

                    <p className="MenuText">{text}</p>
                    <span className="MenuOrder">
                        <a href="/order">Order a delivery</a>
                        <img src="/images/Dish%20icon.svg" alt="Delivery Icon" />
                    </span>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MenuCard;
