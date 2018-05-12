import React, { Component } from 'react';
import Layout from './Components/Layout/Layout'
import CharacterPlayUI from './Containers/Play/Character/CharacterPlayUI'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import styles from './App.scss';


class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Layout>
            <Route exact path='/' component={CharacterPlayUI} />
            <Route path='/characters' render={()=> <div>Characters</div>} />
            <Route path='/campaigns' render={()=> <div>campaigns</div>} />
            <Route path='/account' render={()=> <div>account</div>} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
