import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './Components/Layout/Layout'
import CharacterPlayUI from './Containers/Play/Character/CharacterPlayUI'
import Home from './Containers/Pages/Home/Home'
import Characters from './Containers/Pages/Characters/Characters'
import Campaigns from './Containers/Pages/Campaigns/Campaigns'
import Account from './Containers/Pages/Account/Account'

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/characters' component={Characters} />
              <Route exact path='/characters/new' render={ () => <div>new characters</div> } />
              <Route path='/characters/:character_id' component={CharacterPlayUI}/>
              <Route path='/characters/:character_id/play' component={CharacterPlayUI}/>
              <Route exact path='/campaigns' component={Campaigns} />
              <Route exact path='/campaigns/new' component={Campaigns} />
              <Route path='/campaigns/:campaign_id' component={Campaigns} />
              <Route path='/campaigns/:campaign_id/play' component={Campaigns} />
              <Route path='/account' component={Account}/>
            </Switch>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
