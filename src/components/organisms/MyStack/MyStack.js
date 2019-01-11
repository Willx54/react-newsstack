import React from 'react';
import newsSources from './newsSources.json';
import styled from 'styled-components';

const SourceList = styled.ol`
    list-style-type: none;
`;

const MyStack = (props) => { 
    console.log('props:',props);
    console.log('newsSources:',newsSources);
    return (
        <div>
            <h1>My Stack</h1>
            <p>Select your own personal stack and save it to your browser's cache for next time.</p>
            {/*<p>Your selection: {props.myStack.map(source => {source.name})}</p>*/}
            <SourceList>
                {newsSources.map(source => <li><input type="checkbox" key={source.url} id={source.url} onClick={props.updateMyStack}/><label htmlFor={source.name}>{source.name}</label></li>)}
            </SourceList>
        </div>
    );
}

export default MyStack;