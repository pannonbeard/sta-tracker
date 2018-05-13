import React, { Component } from 'react'

import CharacterForm from '../CharacterForm/CharacterForm'
import styles from './NewCharacter.scss'

class NewCharacter extends Component{
  render(){
    return (
      <div className={styles.NewCharacter}>
        <header>
          <h1><span>New Character</span></h1>
        </header>
        <CharacterForm submit={this.props.create}/>
      </div>
    )
  }
}

export default NewCharacter