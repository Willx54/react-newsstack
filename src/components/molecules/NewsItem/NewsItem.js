import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
    width: 100%;
    min-height: 200px;
    max-width: 100%;
    background: url('${props => props.imageUrl}') center center no-repeat;
    background-size: cover;
    transition: transform 1s ease;
`;

const ListItem = styled.li`
    display: block;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    @media only screen and (min-width: 600px) {
        width: 50%;
    }
    @media only screen and (min-width: 900px) {
        width: 33.33333%;
    }
    @media only screen and (min-width: 1100px) {
        width: 25%;
    }
`;

const Anchor = styled.a`
    text-decoration: none;
    color: #000000;
    overflow: hidden;
    display: block;
    position: relative;
    &:hover ${Image} {
        transform: scale(1.1);
    }
`;

const Title = styled.p`
    margin: 0 30px 20px 0;
    padding: 8px;
    background-color: rgba(255,255,255,0.8);
    position: absolute;
    bottom: 16px;
`;

const NewsItem = (props) => {
    let limitTitle = props.article.title;

    if (limitTitle.length > 99) {
        limitTitle = limitTitle.substring(0,100) + '...';
    }

    return (
        <ListItem>
            <Anchor href={props.article.url} target="_blank" rel="noopener noreferrer">
                <Image imageUrl={props.article.urlToImage}/>
                <Title>{limitTitle}</Title>
            </Anchor>
        </ListItem>
    );
}

export default NewsItem;