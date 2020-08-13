import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {ButtonContainer} from '../Button'
import styled from 'styled-components'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-5">
                <Link className="navbar-brand" to='/'>
                    <i class="fa fa-mobile-alt"></i>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link className="nav-link" to='/'>
                            Product
                        </Link>
                    </li>
                </ul>
                <Link to='/card' className="ml-auto">
                            <ButtonContainer>
                                <i class="fa fa-shopping-cart pr-1"></i>
                            My Cart
                            </ButtonContainer>
                </Link>
            </nav>

        )
    }
}
const NavWrapper=styled.nav`
backgroud:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
}

`
