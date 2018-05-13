import React, { Component } from 'react'

import CharacterForm from '../CharacterForm/CharacterForm'
import styles from './NewCharacter.scss'
import { CharacterConsumer } from '../../../../Contexts/CharacterContext'

class NewCharacter extends Component{
  render(){
    return (
      <CharacterConsumer>
        { ({createCharacter}) => (
          <div className={styles.NewCharacter}>
          <header>
            <h1><span>New Character</span></h1>
          </header>
          <CharacterForm submit={createCharacter} {...this.props}/>
        </div>
        )}
        
      </CharacterConsumer>
    )
  }
}

export default NewCharacter