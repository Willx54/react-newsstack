import React from 'react';
import newsSources from '../../../newsSources/newsSources.json';
import styled from 'styled-components';

const SourceList = styled.ol`
    list-style-type: none;
    width: 100%;
    padding: 0;
    margin: 0;
    height: 300px;
    overflow-y: scroll;
    @media only screen and (min-width: 700px) {
        height: 600px;
        }
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
            width: 16.666%;
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
        background-color: rgba(255,255,255,0.5);
        position: absolute;
        bottom: 0;
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
                        <img src={require('../../../images/default.svg')} alt={source.name} />
                    
                     
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
