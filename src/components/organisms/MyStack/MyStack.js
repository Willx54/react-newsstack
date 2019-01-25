import React from 'react';
import newsSources from '../../../newsSources/newsSources.json';
import styled from 'styled-components';

const SourceList = styled.ol`
    list-style-type: none;
    li {
        display: inline-block;
        width: 50%;
        @media only screen and (min-width: 600px) {
        width: 50%;
    }
    @media only screen and (min-width: 900px) {
        width: 25%;
    }
    @media only screen and (min-width: 1100px) {
        width: 20%;
    }
    }
    }

    input {
        display: none;
    }

    label {
        border: 1px solid #fff;
        padding: 10px;
        display: block;
        position: relative;
        margin: 10px;
        cursor: pointer;
    }

    label:before {
        background-color: white;
        color: white;
        content: " ";
        display: block;
        border-radius: 50%;
        border: 1px solid grey;
        position: absolute;
        top: -5px;
        left: -5px;
        width: 25px;
        height: 25px;
        text-align: center;
        line-height: 28px;
        transition-duration: 0.4s;
        transform: scale(0);
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
        content: "✓";
        background-color: grey;
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
        background-color: rgba(255,255,255,0.3);
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
    }
    input:checked + label p {
        display: none;
    }
`;

const MyStack = (props) => { 
    const {myStack, stackLimitReached, updateMyStack, updateCheckedStatus, saveStack} = props;
    let message = `Number of sources selected:${myStack.length}`;
    if (stackLimitReached) {
        message = 'You have reached you stack limit';
    }
    
    return (
        <div>
            <h1>My Stack</h1>
            <p>Select your own personal stack and save it to your browser's cache for next time.</p>
            <p>{message}</p>
            <SourceList>
                {newsSources.map(source => 
                    <li key={source.id}>
                        <input type="checkbox" key={source.id} id={source.id} onClick={updateMyStack} checked={updateCheckedStatus(source.id)}/>
                        <label htmlFor={source.id}>
                            <img src="http://lorempixel.com/101/101" alt={source.name} />
                            <p>{source.name}</p>
                        </label>
                        
                    </li>
                )}
            </SourceList>
            <button onClick={saveStack}>save stack</button>
        </div>
    );
}

export default MyStack;



// https://codepen.io/anon/pen/wadwpx