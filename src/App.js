import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './Components/Layout/Layout'
import CharacterPlayUI from './Containers/Play/Character/CharacterPlayUI'
import Home from './Containers/Pages/Home/Home'
import Characters from './Containers/Pages/Characters/Characters'
import NewCharacter from './Containers/Create/Character/NewCharacter/NewCharacter'
import EditCharacter from './Containers/Create/Character/EditCharacter/EditCharacter'
import Campaigns from './Containers/Pages/Campaigns/Campaigns'
import Account from './Containers/Pages/Account/Account'

import { CharacterWrap, CharacterConsumer } from './Contexts/CharacterContext'

import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <CharacterWrap>
        <Router>
          <div className={styles.App}>
              <Layout>
                <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/characters' component={Characters}/>
                  <Route exact path='/characters/new' component={NewCharacter} />
                  <Route path='/characters/:character_id/edit' render={(match) => (
                    <CharacterConsumer>
                      {({getCharacter, updateCharacter}) => (
                        <EditCharacter match={match} update={updateCharacter} fetchCharacter={getCharacter}/>
                      )}
                    </CharacterConsumer>                    
                  )}/>
                  <Route path='/characters/:character_id' render={(match) => (
                    <CharacterConsumer>
                      {({getCharacter}) => (
                        <CharacterPlayUI match={match} fetchCharacter={getCharacter}/>
                      )}
                    </CharacterConsumer>                    
                  )}/>
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
      </CharacterWrap>
    );
  }
}

export default App;
