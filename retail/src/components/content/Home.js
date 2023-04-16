import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "./ItemCard";

function Home (props) {
    console.log(Object.values(props)[0])
    return <Container>
        <Row>

            {
                Object.values(props)[0].map(prop => {
                    return <Col xs={12} sm={6} md={4} lg={3} xl={2} key = {prop.id}>
                        <ItemCard {...prop}/>
                    </Col>
                })
            }
        </Row>
    </Container>
}

export default Home;