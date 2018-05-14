import React, { Component } from 'react'

import CharacterForm from '../CharacterForm/CharacterForm'
import { CharacterConsumer } from '../../../../Contexts/CharacterContext'
import styles from './EditCharacter.scss'

class EditCharacterPage extends Component{
  state = {
    character: {}
  }

  componentDidMount(){
    const id = this.props.match.params.character_id
    this.props.fetchCharacter(id)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.character !== this.props.character){
      this.setState({ character: this.props.character })
    }
  }

  render(){
    let form = null
    if(this.state.character.id){
      form = <CharacterForm character={this.state.character} submit={this.props.update}/>
    }
    return (
      <div className={styles.NewCharacter}>
        <header>
          <h1><span>Edit Character</span></h1>
        </header>
        {form}
      </div>
    )
  }
}

const editCharacter = (props) => (
  <CharacterConsumer>
    { ({getCharacter, updateCharacter, currentCharacter}) => (
      <EditCharacterPage 
        {...props} 
        update={updateCharacter} 
        fetchCharacter={getCharacter} 
        character={currentCharacter}/>
    )}
  </CharacterConsumer>
)

export default editCharacter