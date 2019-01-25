import React from 'react';
import { Link } from "react-router-dom";
import {Add} from 'styled-icons/material/Add'
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
  display: none;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #3f87b3;
  text-decoration: none;
  position: absolute;
  right: 32px;
  bottom: -18px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  @media only screen and (min-width: 600px) {
    display: flex;
  }
`;

const StyledAdd = styled(Add)`
  color: #fff;
  width: 40px;
  height: 40px;
`

// $primary-color: #27546f;
// $secondary-color: #000e17;
// $tertiary-color: #becbd3;
// $quaternery-color: #3f87b3;

const Header = (props) => {
    return(
        <HeaderWrap>
            <Container>
                <Logo to="/"><h1>newsstack</h1></Logo>
                <MyNewsLink to="/my-stack"><StyledAdd/></MyNewsLink>
            </Container>
        </HeaderWrap>
    );
}

export default Header;