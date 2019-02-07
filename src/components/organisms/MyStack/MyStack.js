import React from 'react';
import newsSources from '../../../newsSources/newsSources.json';
import styled, {css} from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
    position: relative;
`;

const SourceListWrap = styled.div`
    margin: 40px 0;
/* height: 300px;
overflow-y: scroll;
margin-bottom: 32px;
@media only screen and (min-width: 700px) {
    height: 500px;
    } */
`;

const SourceList = styled.ol`
    list-style-type: none;
    width: 100%;
    padding: 0;
    margin: 0;
    li {
        display: inline-block;
        width: 50%;
        @media only screen and (min-width: 455px) {
            width: 33.333%;
        }
        @media only screen and (min-width: 670px) {
            width: 25%;
        }
        @media only screen and (min-width: 890px) {
            width: 20%;
        }
        @media only screen and (min-width: 1120px) {
            width: 14.2857143%;
        }
    }

    input {
        display: none;
    }

    label {
        display: block;
        position: relative;
        margin: 10px;
        cursor: pointer;
    }

    label:before {
        z-index: 10;
        background-color: #3f87b3;
        color: white;
        content: " ";
        display: block;
        border-radius: 50%;
        position: absolute;
        top: -4px;
        left: -4px;
        width: 32px;
        height: 32px;
        text-align: center;
        line-height: 28px;
        transition-duration: 0.4s;
        transform: scale(0);
        box-sizing: border-box;
        padding-top: 3px;
    }

    label img {
        /* height: 100px; */
        display: block;
        width: 100%;
        transition-duration: 0.2s;
        transform-origin: 50% 50%;
    }

    input:checked + label {
        border-color: #ddd;
    }

    input:checked + label:before {
        z-index: 10;
        content: "✓";
        background-color: #3f87b3;
        transform: scale(1);
    }

    input:checked + label img {
        transform: scale(0.9);
        box-shadow: 0 0 5px #333;
        z-index: -1;
    }
    p {
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        margin: 0 auto 0 auto;
        padding: 8px;
        background-color: rgba(255,255,255,0.7);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-transform:uppercase;
        font-weight: bold;
        transition: opacity 0.2s ease;
        opacity: 1;
    }
    input:checked + label p {
        opacity: 0;
    }
`;

const Panel = styled.div`
    margin-bottom: 32px;
`

const Button =styled.button`
    background-color: #3f87b3;
    border: none;
    padding: 16px 24px;
    width: 100%;
    color: #fff;
    transition: opacity ease 0.3s;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    outline: none;
    &:hover {
        opacity: 0.7;
    }
    ${props =>
        props.saveLock &&
        css`
            background-color: #ddd;
            cursor: default;
            &:hover {
                opacity: 1;
            }
    `};
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

const MyStack = (props) => { 
    const {myStack, stackLimitReached, updateMyStack, updateCheckedStatus, saveStack, saveLock, saveButtonText} = props;
    let message = `Please select from 1 to 6 sources to save.`;
    if (myStack.length > 0) {
        message = `Number of sources selected:${myStack.length}`;
    }
    if (stackLimitReached) {
        message = 'You have reached you stack limit';
    }
    
    return (
        <Container>
        <StyledLink to="/">home</StyledLink>
            <h1>My Stack</h1>
            <p>Select your own personal stack and save it to your browser's memory for next time.</p>
            <SourceListWrap>
            <SourceList>
                {newsSources.map(source => 
                    <li key={source.id}>
                        <input type="checkbox" key={source.id} id={source.id} onClick={updateMyStack} checked={updateCheckedStatus(source.id)}/>
                        <label htmlFor={source.id}>
                        <img src={require('../../../images/'+source.id+'.png')} alt={source.name} />    
                            <p>{source.name}</p>
                        </label>
                        
                    </li>
                )}
            </SourceList>
            </SourceListWrap>
            <Panel>
            <p>{message}</p>
            <Button saveLock={saveLock} onClick={saveStack}>{saveButtonText}</Button>
            </Panel>
            
        </Container>
    );
}

export default MyStack;



// https://codepen.io/anon/pen/wadwpx
