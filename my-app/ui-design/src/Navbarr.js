import React, { useState } from 'react';
import pict from "./logo.png";
import Statistics from "./Statistics";
import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import AnnoFeed from "./Announcement/AnnoFeed";

const styles = {
    Nav:{
        marginLeft: "auto",
        marginRight: 0,
        paddingRight: "1%"
    },

    NavbarBrand:{
        paddingLeft: "2%"
    }
}

const Navbarr = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{background:"white"}} light expand="md" fixed="top">
                <NavbarBrand style={styles.NavbarBrand}><img style={{width:"10%", height:"10%", paddingRight:"10px"}} src={pict} alt="logo"/>freewilly</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav style={styles.Nav} className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>Ищут дом</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Новости</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Потерянные</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Другие объявления</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Связь с нами</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navbarr;
