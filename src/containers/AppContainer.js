import React from 'react';
import axios from 'axios';
import NewsList from '../components/organisms/NewsList/NewsList';
import styled from 'styled-components';
import {Add} from 'styled-icons/material/Add'
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import MyStack from '../components/organisms/MyStack/MyStack';
import Contact from '../components/organisms/Contact/Contact';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import newsSources from '../newsSources/newsSources.json';

const Container = styled.div`
  padding: 32px 8px 72px 8px;
  max-width: 1200px;
  margin: 0 auto;
`;

const MyNewsLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #3f87b3;
  text-decoration: none;
  position: fixed;
  right: 16px;
  bottom: 32px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

const StyledAdd = styled(Add)`
  color: #fff;
  width: 40px;
  height: 40px;
`

// $primary-color: #27546f;
// $secondary-color: #000e17;
// $tertiary-color: #becbd3;
// $quaternery-color: #3f87b3;

class AppContainer extends React.Component {
  state = {
    articles: [],
    myStack: [],
    stackLimitReached: false,
    channels: [
      {
        name: 'bbc',
        id: 'bbc-news'
      },
      {
        name: 'cnn',
        id: 'cnn'
      },
      {
        name: 'financial times',
        id: 'financial-times'
      },
      {
        name: 'independent',
        id: 'independent'
      },
      {
        name: 'mtv news',
        id: 'mtv-news'
      },
      {
        name: 'national geographic',
        id: 'national-geographic'
      }
    ],
    selectedChannel: ''
  }

  componentDidMount() {
    const myStackLocalStorage = JSON.parse(localStorage.getItem('myStack'));
    const copiedNewsSources = [...newsSources]
    if (myStackLocalStorage) {
      let filteredNewsSources = copiedNewsSources.filter(function (el) {
        return myStackLocalStorage.indexOf(el.id) >= 0; 
      });
      this.setState({
        channels: filteredNewsSources,
        selectedChannel: filteredNewsSources[0].id
      }, () => {
        this.getNews(this.state.selectedChannel);
      });
    } else {
      this.setState({
        selectedChannel: this.state.channels[0].id
      }, () => {
        this.getNews(this.state.selectedChannel);
      });
    }   
  }

 saveStack = () => {
   console.log(this.state.myStack);
   let myStackArray = [...this.state.myStack];
   if (myStackArray.length) {
    localStorage.setItem('myStack', JSON.stringify(myStackArray));
    console.log('STACK SAVED');
    // update current live channels also
    const copiedNewsSources = [...newsSources];
    let filteredNewsSources = copiedNewsSources.filter(function (el) {
      return myStackArray.indexOf(el.id) >= 0; 
    });
    this.setState({
      channels: filteredNewsSources,
      selectedChannel: filteredNewsSources[0].id
    }, () => {
      this.getNews(this.state.selectedChannel);
    });
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
    let tempArray = [...this.state.myStack];
    let index = tempArray.indexOf(e.target.id);
    if (index !== -1) {
      this.setState({stackLimitReached: false});
      tempArray.splice(index, 1);
      this.setState({myStack: tempArray}, () => {
      });
    } else if (this.state.myStack.length <= 7) {
      this.setState({stackLimitReached: false});
      tempArray.push(e.target.id);
      this.setState({myStack: tempArray}, () => {
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
            <Route exact path="/" render={() => <MyNewsLink to="/my-stack"><StyledAdd/></MyNewsLink>} />
          </Container>
          <Footer/>
        </div> 
      </Router>
    );
  }
}

export default AppContainer;

//X save array to cookies
//X on load check to see if array is in cookies
//X move json to general location
// if array is there then filter json
// use json intsead of default
// get rid of console errors

// style my stack link as FAB
// style my stack list