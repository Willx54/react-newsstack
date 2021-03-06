import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const FooterWrap = styled.footer`
    background-color: #000e17;
    font-size: 12px;
`;

const Container = styled.div`
    padding: 0 16px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
`;

const PoweredBy = styled.span`
    color: #fff;
    opacity: 0.5;
    a {
        color: #fff;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`

const ContactLink = styled(Link)`
    color: #fff;
    opacity: 0.5;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

const Footer = (props) => {
    return(
        <FooterWrap>
            <Container>
                <PoweredBy>powered by <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">newsapi.org</a></PoweredBy>
                <ContactLink to="/contact">contact</ContactLink>
            </Container>
        </FooterWrap>
    );
}

export default Footer;
