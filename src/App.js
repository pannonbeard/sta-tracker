import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { auth, provider } from './firebase'

import Layout from './Components/Layout/Layout'
import CharacterPlayUI from './Containers/Play/Character/CharacterPlayUI'
import Home from './Containers/Pages/Home/Home'
import Characters from './Containers/Pages/Characters/Characters'
import NewCharacter from './Containers/Create/Character/NewCharacter/NewCharacter'
import EditCharacter from './Containers/Create/Character/EditCharacter/EditCharacter'
import Campaigns from './Containers/Pages/Campaigns/Campaigns'
import Account from './Containers/Pages/Account/Account'
import { CharacterWrap } from './Contexts/CharacterContext'
import { UserProvider, UserConsumer } from './Contexts/UserContext'
import Auth from './Containers/Auth/Auth'
import Logout from './Containers/Auth/logout'

import styles from './App.scss';

class App extends Component {
  state = {
    user: null,
    logIn: () => {
      auth.signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          this.setState({
            user
          });
        });
    },
    logOut: () => {
      auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }

  render() {
    return (
      <UserProvider value={this.state}>
        <CharacterWrap>
          { this.state.user 
          ? <Router>
              <div className={styles.App}>
                <Layout>
                  <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/characters' component={Characters}/>
                    <Route exact path='/characters/new' component={NewCharacter} />
                    <Route path='/characters/:character_id/edit' component={EditCharacter} />
                    <Route path='/characters/:character_id' component={CharacterPlayUI} />
                    <Route path='/characters/:character_id/play' component={CharacterPlayUI}/>
                    <Route exact path='/campaigns' component={Campaigns} />
                    <Route exact path='/campaigns/new' component={Campaigns} />
                    <Route path='/campaigns/:campaign_id' component={Campaigns} />
                    <Route path='/campaigns/:campaign_id/play' component={Campaigns} />
                    <Route path='/account' component={Account}/>
                    <Route path='/logout' component={Logout} />
                  </Switch>
                </Layout>
              </div>
            </Router> 
          : <UserConsumer>
              { ({logIn}) => (
                <Auth signIn={logIn}/>
              )}
            </UserConsumer>
          }
        </CharacterWrap>
      </UserProvider>
    );
  }
}

export default App;
