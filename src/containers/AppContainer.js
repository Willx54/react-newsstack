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
    stackLimitReached: false,
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

 saveStack = () => {
   
   let tempArray = [...this.state.myStack];
   if (tempArray.length) {
    console.log('STACK SAVED');
    // push whole object here
    // this.setState({channels: tempArray});
   } else {
     console.log('NOTHING HAPPENED');
   }
   
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
    let testId = e.target.id;
      let tempArray = [...this.state.myStack];
      let index = tempArray.indexOf(e.target.id);
      if (index !== -1) {
        this.setState({stackLimitReached: false});
        tempArray.splice(index, 1);
        this.setState({myStack: tempArray}, () => {
          console.log(this.state.myStack);
        });
      } else if (this.state.myStack.length <= 7) {
        this.setState({stackLimitReached: false});
        tempArray.push(e.target.id);
        this.setState({myStack: tempArray}, () => {
          console.log(this.state.myStack);
        });
      } else {
        this.setState({stackLimitReached: true});
      }
      tempArray = tempArray.sort();
  }

  updateCheckedStatus = (urlStr) => {
    let tempArray = [...this.state.myStack];
    let index = tempArray.indexOf(urlStr);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  }
  
  render() {

    return (
      <Router>
        <div>
          <Header/>
          <Container>
            <Route path="/" exact render={() => <NewsList articles={this.state.articles} channels={this.state.channels} changeChannel={this.changeChannel} selectedChannel={this.state.selectedChannel}/>}/>
            <Route path="/my-stack" render={() => <MyStack myStack={this.state.myStack} updateMyStack={this.updateMyStack} stackLimitReached={this.state.stackLimitReached} updateCheckedStatus={this.updateCheckedStatus} saveStack={this.saveStack}/>} />
            <Route path="/contact" component={Contact} />
          </Container>
          <Footer/>
        </div> 
      </Router>
    );
  }
}

export default AppContainer;


