import React from 'react';
import NewsItem from '../../molecules/NewsItem/NewsItem';
import PrimaryNav from '../PrimaryNav/PrimaryNav';
import styled from 'styled-components';
import Spinner from '../../atoms/Spinner/Spinner';

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 0;
`;

const NewsList = (props) => { 
    console.log('props.selectedChannel:' ,props.selectedChannel);
    return (
        <div>
            <PrimaryNav channels={props.channels} changeChannel={props.changeChannel} selectedChannel={props.selectedChannel}/>
            {props.articles.length !== 0 ? (
            <List>
                {props.articles.map(article => <NewsItem key={article.url} article={article}/>)}
            </List>
            ) : (
            <Spinner></Spinner>
            )}    
        </div>
    );
}

export default NewsList;