import React from 'react';
import styled from 'styled-components';

const SpinnerDiv = styled.div`
    border-radius: 50%;
    width: 48px;
    height: 48px;
    &:after {
        border-radius: 50%;
        width: 48px;
        height: 48px;
    }
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 6px solid rgba(39, 84, 111, 0.2);
    border-right: 6px solid rgba(39, 84, 111, 0.2);
    border-bottom: 6px solid rgba(39, 84, 111, 0.2);
    border-left: 6px solid #27546f;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
    @-webkit-keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;

const Spinner = (props) => {
    return (
        <SpinnerDiv></SpinnerDiv>
    );
}

export default Spinner;