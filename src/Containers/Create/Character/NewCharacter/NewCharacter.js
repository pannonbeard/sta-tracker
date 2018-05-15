import React, { Component } from 'react'

import CharacterForm from '../CharacterForm/CharacterForm'
import styles from './NewCharacter.scss'
import { CharacterConsumer } from '../../../../Contexts/CharacterContext'
import { UserConsumer } from '../../../../Contexts/UserContext'

class NewCharacter extends Component{
  render(){
    return (
      <UserConsumer>
        {({ user }) => (
          <CharacterConsumer>
            { ({createCharacter}) => {
              return(
                <div className={styles.NewCharacter}>
                  <header>
                    <h1><span>New Character</span></h1>
                  </header>
                  <CharacterForm submit={createCharacter} {...this.props} user={user.uid}/>
                </div>
              )}
            }
          </CharacterConsumer>
        )}
      
      </UserConsumer>
    )
  }
}

export default NewCharacter