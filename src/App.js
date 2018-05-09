import React, { Component } from 'react';
import Layout from './Components/Layout/Layout'
import CharacterPlayUI from './Containers/Play/Character/CharacterPlayUI'

import { BrowserRouter as Router } from 'react-router-dom'

import styles from './App.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Layout>
            <CharacterPlayUI />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
