import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 100%;
    max-width: 100%;
`;

const ListItem = styled.li`
    display: block;
    width: 25%;
`;

const NewsItem = (props) => {
    return (
        <ListItem>
            <a href={props.article.url} target="_blank">
                <Image src={props.article.urlToImage} alt="alt text" />
                <p>{props.article.description}</p>
            </a>
        </ListItem>
    );
}

export default NewsItem;