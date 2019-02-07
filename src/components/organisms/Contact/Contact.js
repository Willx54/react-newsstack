import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

// $primary-color: #27546f;
// $secondary-color: #000e17;
// $tertiary-color: #becbd3;
// $quaternery-color: #3f87b3;

const Container = styled.div`
    position: relative;
`;

const Anchor = styled.a`
    color: #3f87b3;
`;

const StyledLink = styled(Link)`
    color: #3f87b3;
    position: absolute;
    right: 12px;
    top: -24px;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const Contact = (props) => { 
    return (
        <Container>
            <StyledLink to="/">home</StyledLink>
            <h1>Contact</h1>
            <p>Want to get in touch? Something not working with the site? Please feel free to drop me an <Anchor href="mailto:W_Priddle@hotmail.com">email</Anchor>.</p>
        </Container>
    );
}

export default Contact;