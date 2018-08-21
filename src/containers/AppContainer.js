import React, { Component } from 'react';
import axios from 'axios';
import NewsList from '../components/organisms/NewsList/NewsList';
import styled from 'styled-components';

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

class AppContainer extends Component {
    state = {
      news: [],
      articles: []
  }

  componentDidMount() {
      axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=22584ee7883646308b29d728c5895470`)
      .then(res => {
          const articles = res.data.articles;
          this.setState({ articles });
      })
  }
  render() {
    return (
      <div>
        <Header>header</Header>
        <Container>
          <Menu>
            <ul>
              <li>bbc</li>
              <li>blah</li>
              <li>blah</li>
              <li>blah</li>
              <li>blah</li>
              <li>blah</li>
              <li>blah</li>
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

