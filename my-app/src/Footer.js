import React from "react";
import {Container, Row, Col} from "reactstrap";
import{useMediaQuery} from "react-responsive";

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 600 })
    return isDesktop ? children : null
}

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({maxWidth: 600 })
    return isMobile ? children : null
}

function Footer() {
    return (
        <div>
            <Desktop>
                <div style={{background:"white",borderTop:"solid", height:"100px"}}>
                    <Container>
                        <Row style={{textAlign:"center"}} xs="4">
                            <Col>Контактный телефон: +375332288822</Col>
                            <Col>Адрес: г. Минск, ул. Котопёса, д 3</Col>
                            <Col>О нас</Col>
                            <Col>Какая-то реклама</Col>
                        </Row>
                    </Container>
                </div>
            </Desktop>
            <Mobile>
                <div style={{background:"white",borderTop:"solid"}}>
                    <Container>
                        <Row style={{textAlign:"center", marginTop:"5px"}}>Контактный телефон: +375332288822</Row>
                        <Row style={{textAlign:"center", marginTop:"5px"}}>Адрес: г. Минск, ул. Котопёса, д 3</Row>
                        <Row style={{textAlign:"center", marginTop:"5px"}}>О нас</Row>
                        <Row style={{textAlign:"center", marginTop:"5px"}}>Какая-то реклама</Row>
                    </Container>
                </div>
            </Mobile>
        </div>
    )
}

export default Footer;