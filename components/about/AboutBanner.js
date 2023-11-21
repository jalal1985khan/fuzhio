import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const AboutBanner = () => {
    return (
        <>
            <Container fluid className='about-background-container d-flex flex-wrap align-items-center '>
                <Container>
                    <Row>
                        <Col >
                            <h1 className='text-white banner-font dosis-regular' >
                                ABOUT US
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default AboutBanner