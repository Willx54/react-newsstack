import React from 'react';
import styled from 'styled-components';
import {rem} from 'polished'; 

const Menu = styled.nav`
  padding: 0 4px;
  margin-bottom: ${rem('12px')};
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: inline;
  }
  button {
    background-color: #27546f;
    border: none;
    border-radius: 3px;
    color: #fff;
    padding: 4px;
    margin: 4px;
    &:hover {
        cursor: pointer;
    }
  }
  @media only screen and (min-width: 1000px) {
    margin: ${rem('16px')} 0 ${rem('24px')} 0;
    ul {
        /* margin-left: ${rem('-24px')} */
    }
    li {
        border-right: 1px solid #4b4b4b;
        padding: 0 ${rem('24px')};
    }
    li:last-child {
        border-right: none;
    }
    button {
        background-color: transparent;
        color: #4b4b4b;
        font-size: ${rem('18px')};
        padding: 0 0 5px 0;
        outline: none;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
        border-radius: 0;
        &:before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 51%;
            right: 51%;
            bottom: 0;
            background: #3C97CE;
            height: 3px;
            -webkit-transition-property: left, right;
            transition-property: left, right;
            -webkit-transition-duration: 0.15s;
            transition-duration: 0.15s;
            -webkit-transition-timing-function: ease-out;
            transition-timing-function: ease-out;
        }
        &:hover:before, &:focus:before, &:active:before {
            left: 0;
            right: 0;
        }
    }
  }
`;   



const PrimaryNav = (props) => {
    const { changeChannel } = props;
    return(
        <Menu>
            <ul>
                <li><button id="bbc-news" onClick={changeChannel}>bbc</button></li>
                <li><button id="cnn" onClick={changeChannel}>cnn</button></li>
                <li><button id="financial-times" onClick={changeChannel}>financial times</button></li>
                <li><button id="independent" onClick={changeChannel}>independent</button></li>
                <li><button id="mtv-news" onClick={changeChannel}>mtv</button></li>
                <li><button id="national-geographic" onClick={changeChannel}>national geographic</button></li>
            </ul>
        </Menu>
    );
}

export default PrimaryNav;