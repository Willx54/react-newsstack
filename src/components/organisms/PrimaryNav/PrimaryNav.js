import React from 'react';
import styled from 'styled-components';

const Menu = styled.nav`
  padding: 0 4px;
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
    ul {
   
    }
    li {
        border-right: 1px solid black;
        padding: 0 16px;
    }
    li:last-child {
        border-right: none;
    }
    button {
        background-color: transparent;
        color: #000;
        font-size: 20px;
        padding: 0;
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