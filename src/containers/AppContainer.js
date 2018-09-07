import React, { Component } from 'react';
import axios from 'axios';
import NewsList from '../components/organisms/NewsList/NewsList';
import styled from 'styled-components';
import { get, isEqual } from 'lodash';

const Header = styled.header`
  height: 80px;
  background-color: #eee;
`;

const Footer = styled.footer`
  height: 80px;
  background-color: #ddd;
`;

const Container = styled.div`
  padding: 0 15px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Menu = styled.nav`
  ul {
    list-style-type: none;
  }
  li {
    display: inline;
    padding: 0 5px;
  }
`;

const newsStrings = {
  "bbc": 'bbc-news',
  "cnn": "cnn",
  "financial times": "financial-times",
  "independent": "independent",
  "mtv": "mtv-news",
  "national geographic": "national-geographic"
}

class AppContainer extends React.Component {
  state = {
    articles: [],
    newsSelection: 'bbc-news'
  }

  componentDidMount() {
    this.getNews('bbc-news');
  }

  getNews = (channel) => {
    let newsUrl = `https://newsapi.org/v2/top-headlines?sources=${channel}&apiKey=22584ee7883646308b29d728c5895470`;
      axios.get(newsUrl)
      .then(res => {
          const articles = res.data.articles;
          this.setState({ articles });
      })
  }
  
  changeChannel = (e) => {
    console.log('change channel');
    // console.log(e.target.id);
    let newChannel = e.target.id;
    this.getNews(newChannel);
  }
  

  render() {

    return (
      <div>
        <Header>header</Header>
        <Container>
        <div>SELECTION: {this.state.newsSelection}</div>
          <Menu>
            <ul>
              <li><button id="bbc-news" onClick={this.changeChannel}>bbc</button></li>
              <li><button id="cnn" onClick={this.changeChannel}>cnn</button></li>
              <li><button id="financial-times" onClick={this.changeChannel}>financial times</button></li>
              <li><button id="independent" onClick={this.changeChannel}>independent</button></li>
              <li><button id="mtv-news" onClick={this.changeChannel}>mtv</button></li>
              <li><button id="national-geographic" onClick={this.changeChannel}>national geographic</button></li>
            </ul>
          </Menu>
          <NewsList articles={this.state.articles}/>
        </Container>
        <Footer>footer</Footer>
      </div>
    );
  }
}

export default AppContainer;

