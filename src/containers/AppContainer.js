import React from 'react';
import axios from 'axios';
import NewsList from '../components/organisms/NewsList/NewsList';
import styled from 'styled-components';
import Header from '../components/organisms/Header/Header';
import PrimaryNav from '../components/organisms/PrimaryNav/PrimaryNav';
import Footer from '../components/organisms/Footer/Footer';
// import { get, isEqual } from 'lodash';

const Container = styled.div`
  padding: 32px 8px 72px 8px;
  max-width: 1200px;
  margin: 0 auto;
`;

class AppContainer extends React.Component {
  state = {
    articles: []
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
    let newChannel = e.target.id;
    this.getNews(newChannel);
  }
  

  render() {

    return (
      <div>
        <Header/>
        <Container>
          <PrimaryNav changeChannel={this.changeChannel}/>
          <NewsList articles={this.state.articles}/>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default AppContainer;

