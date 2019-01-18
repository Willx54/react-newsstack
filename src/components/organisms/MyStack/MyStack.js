import React from 'react';
import newsSources from './newsSources.json';
import styled from 'styled-components';

const SourceList = styled.ol`
    list-style-type: none;
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
                {newsSources.map(source => <li><input type="checkbox" key={source.urlStr} id={source.urlStr} onClick={updateMyStack} checked={updateCheckedStatus(source.urlStr)}/><label htmlFor={source.name}>{source.name}</label></li>)}
            </SourceList>
            <button onClick={saveStack}>save stack</button>
        </div>
    );
}

export default MyStack;

