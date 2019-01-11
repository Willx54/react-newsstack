import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import logo from './logo.svg';

const HeaderWrap = styled.header`
    background-color: #27546f;
`;

const Container = styled.div`
    position: relative;
    padding: 0 15px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 80px;
`;

const Logo = styled(Link)`
    h1{
        background: url(${logo}) center center no-repeat;
        margin: 0;
        width: 250px;
        height: 50px;
        text-indent: -9999px;
    }
`;

const MyNewsLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    position: absolute;
    right: 15px;
    top: 30px;
`;

// $primary-color: #27546f;
// $secondary-color: #000e17;
// $tertiary-color: #becbd3;
// $quaternery-color: #3f87b3;

const Header = (props) => {
    return(
        <HeaderWrap>
            <Container>
                <Logo to="/"><h1>newsstack</h1></Logo>
                <MyNewsLink to="/my-stack">My Stack</MyNewsLink>
            </Container>
        </HeaderWrap>
    );
}

export default Header;