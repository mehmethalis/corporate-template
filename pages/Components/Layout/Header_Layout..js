import React, { useState } from 'react';
import {Navbar, Nav, Affix, Button, Col} from 'rsuite';
import  { Drawer,Anchor } from 'antd';
const { Link } = Anchor;

const Header_Layout=()=>{
    const [visible, setState] = useState(false);

    const showDrawer = () => {
        setState(true);
    };
    const onClose = () => {
        setState(false);
    };
    return(
        <Affix >
            <Navbar  className="header-navbar ">
                <Navbar.Header >
                    <a href="/" className="navbar-brand logo ">
                        <img className="logo-img" src="/vercel.svg" alt="logo"/>
                    </a>
                    <span id="vertical-divider">|</span>

                    <div className="header-contact">
                        <a href="tel:+902663358585"><i className="fas fa-phone"/>0 266 335 8585</a>
                        <a href="mailto:vercel@email.com"><i className="fas fa-envelope"/>vercel@email.com</a>
                    </div>
                    <Button id='nav-button' onClick={showDrawer}>
                        <i className="fas fa-bars"/>
                    </Button>

                </Navbar.Header>


                <div id='mobile-hidden'>
                    <Navbar.Body >

                        <Nav pullRight >
                            <Nav.Item href='/#home'>Anasayfa</Nav.Item>
                            <Nav.Item href='/#about'>Hakkımızda</Nav.Item>
                            <Nav.Item href='/#services'>Faaliyet Alanları</Nav.Item>
                            <Nav.Item href='/#teams'>Avukatlarımız</Nav.Item>
                            <Nav.Item href='/#blog'>Blog</Nav.Item>
                            <Nav.Item href='/#contact'>İletişim</Nav.Item>

                        </Nav>
                    </Navbar.Body>
                </div>

                <div id='mobile-visible'>

                    <Navbar.Body >

                        <Drawer
                            title={
                                (
                                    <div className={'mobile-contact'}>
                                        <a href="tel:+902663358585"><i className="fas fa-phone"/>0 266 335 8585</a>
                                        <a href="mailto:vercel@email.com"><i className="fas fa-envelope"/>vercel@email.com</a>

                                    </div>
                                )
                            }
                            footer={
                                (
                                    <div className={'mobile-link'}>
                                        <a href='https://github.com/mehmethalis' target='_blank' rel='noreferrer' ><i className="fab fa-github" /></a>
                                        <a href='https://www.linkedin.com/in/mehmethalis/' target='_blank' rel='noreferrer' ><i className="fab fa-linkedin-in" /></a>
                                        <a href='https://www.linkedin.com/in/mehmethalis/' target='_blank' rel='noreferrer' ><i className="fab fa-instagram"/></a>
                                        <a href='https://www.linkedin.com/in/mehmethalis/' target='_blank' rel='noreferrer' ><i
                                            className="fab fa-twitter"/></a>
                                        <a href='https://www.linkedin.com/in/mehmethalis/' target='_blank' rel='noreferrer' ><i
                                            className="fab fa-facebook-f"/></a>
                                    </div>
                                )
                            }
                            placement="right"
                            closable={false}
                            onClose={onClose}
                            visible={visible}
                        >

                            <Anchor activeLink={'#slider'}>
                                <Link  href="#home" title="Anasayfa" />
                                <Link href="#about" title="Hakkımızda" />
                                <Link href="#services" title="Faaliyet Alanları" />
                                <Link href="#teams" title="Avukatlarımız" />
                                <Link href="#blog" title="Blog" />
                                <Link href="#contact" title="İletişim" />
                            </Anchor>

                        </Drawer>
                    </Navbar.Body>
                </div>


            </Navbar>
        </Affix>
    )
}

export default Header_Layout;