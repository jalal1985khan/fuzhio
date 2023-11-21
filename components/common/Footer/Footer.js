import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'


import { Link } from 'react-router-dom'



const Footer = () => {
    return (
        <>
            <Container fluid style={{ background: "rgba(110,24,12,.78)" }} className='p-0'>
                <Container>
                    <Row>
                        <Col md={6} className='text-center text-md-start p-md-5 p-2'>
                            <Image src='/assets/footer/fuzhio_logo.png' alt='' width="50%" />
                            <div className='py-3 '>
                                <p className='text-white'>Fuzhio Health and Business Services Pvt Ltd No. 25, RMV 2nd Stage, AECS Layout, 1st Main Road, Ashwathnagar, Bangalore - 560094.</p>
                            </div>
                            <div>
                                <div>
                                    <a href="tel:+91 937981 5394" className='text-decoration-none text-white'><b>Phone</b>: +91 937981 5394</a>
                                </div>
                                <div>
                                    <a href="mailto:info@fuzhio.co" className='text-decoration-none text-white'><b>Email</b>: info@fuzhio.co</a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='p-md-5 p-2'>
                            <p className='text-white'>Send us your message.</p>

                            <div className='d-flex flex-md-row flex-column'>
                                <div className="w-100">
                                    <input type='name' className='w-100 p-2' placeholder='First Name' />
                                </div>
                                <div className='w-100'>
                                    <input type='name' className='w-100 p-2' placeholder='Last Name' />
                                </div>
                            </div>
                            <div className=' my-md-3'>
                                <input className='w-100 p-2' type='email' placeholder='Email' />
                            </div>
                            <div>
                                <textarea className='w-100 p-2' type='text' placeholder='Message' rows={5} />
                            </div>

                            <Button type='submit' className='py-3 px-5 mt-2 bg-white text-dark rounded-0 poppins-bold'>Submit</Button>
                        </Col>
                    </Row>
                </Container>
                <hr className='border border-1' />
                <Container className='text-center text-white p-2' >
                    <p style={{ fontSize: '10pt', color: 'rgba(255,255,255,.5)' }}>Copyright © 2023 Fuzhio Health and Business Services | Powered by Fuzhio Health and Business Services</p>
                </Container>



            </Container>
        </>
    )
}

export default Footer