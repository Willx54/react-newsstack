import React from 'react';
import axios from 'axios';
import NewsList from '../components/organisms/NewsList/NewsList';
import styled from 'styled-components';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import MyStack from '../components/organisms/MyStack/MyStack';
import Contact from '../components/organisms/Contact/Contact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Container = styled.div`
  padding: 32px 8px 72px 8px;
  max-width: 1200px;
  margin: 0 auto;
`;

class AppContainer extends React.Component {
  state = {
    articles: [],
    myStack: [],
    channels: [
      {
        name: 'bbc',
        urlStr: 'bbc-news'
        
      },
      {
        name: 'cnn',
        urlStr: 'cnn'
        
      },
      {
        name: 'financial times',
        urlStr: 'financial-times'
        
      },
      {
        name: 'independent',
        urlStr: 'independent'
      },
      {
        name: 'mtv news',
        urlStr: 'mtv-news'
      },
      {
        name: 'national geographic',
        urlStr: 'national-geographic'
      }
    ],
    selectedChannel: ''
  }

  componentDidMount() {
    this.setState({
      selectedChannel: this.state.channels[0].urlStr
    }, () => {
      this.getNews(this.state.selectedChannel);
    });
    
  }

  getNews = (channel) => {
    let newsUrl = `https://newsapi.org/v2/top-headlines?sources=${channel}&apiKey=22584ee7883646308b29d728c5895470`;
      axios.get(newsUrl)
      .then(res => {
          const articles = res.data.articles;
          this.setState({ articles });
      })
      .catch(function (error) {
        console.log('error caught');
        console.log(error);
      });
  }
  
  changeChannel = (e) => {
    this.setState({
      selectedChannel: e.target.id
    }, () => {
      this.getNews(this.state.selectedChannel);
    });
  }

  updateMyStack = (e) => {
    console.log('updateMyStack source:', e.target.id);
    this.setState({myStack: e.target.id})
  }
  
  render() {

    return (
      <Router>
        <div>
          <Header/>
          <Container>
            <Route path="/" exact render={() => <NewsList articles={this.state.articles} channels={this.state.channels} changeChannel={this.changeChannel} selectedChannel={this.state.selectedChannel}/>}/>
            <Route path="/my-stack" render={() => <MyStack myStack={this.state.myStack} updateMyStack={this.updateMyStack}/>} />
            <Route path="/contact" component={Contact} />
          </Container>
          <Footer/>
        </div> 
      </Router>
    );
  }
}

export default AppContainer;


