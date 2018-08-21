import React from 'react';
import NewsItem from '../../molecules/NewsItem/NewsItem';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 0;
`;

const NewsList = (props) => { 
    return (
        <div>
        <List>
            {props.articles.map(article => <NewsItem key={article.url} article={article}/>)}
        </List>
        
    </div>
    );
}

export default NewsList;