import React, { Component } from 'react';
import NewsList from '../components/organisms/NewsList/NewsList';

class AppContainer extends Component {
  render() {
    return (
      <div>
        <header>header</header>
        <nav>navigation</nav>
        <NewsList/>
        <footer>footer</footer>
      </div>
    );
  }
}

export default AppContainer;