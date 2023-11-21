import React from 'react';
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Link from 'next/link';

function Header() {
    return (
        <>
            <Container fluid className='position-absolute py-0'>
                <Container className='p-0'>
                    <nav class="navbar navbar-expand-lg bg-transparent">
                        <Link class="navbar-brand" href="/">
                            <Image src='/fuzhio_logo.png' width={130} />
                        </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active px-md-2">
                                    <Link class="nav-link" href="/">Home <span class="sr-only">(current)</span></Link>
                                </li>
                                <li class="nav-item px-md-2">
                                    <Link class="nav-link" href="/about">About</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle px-md-2" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Our Work
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link class="dropdown-item" href="/agriculture">Agriculture</Link>
                                        <Link class="dropdown-item" href="/noble-plastic">Noble Plastic</Link>

                                    </div>
                                </li>
                                <li class="nav-item px-md-2">
                                    <Link class="nav-link" href="/fuzhio-covid-response">Fuzhio & Covid Response</Link>
                                </li>
                                <li class="nav-item px-md-2">
                                    <Link class="nav-link" href="/blog">Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Container>
            </Container>



        </>
    )
}
export default Header