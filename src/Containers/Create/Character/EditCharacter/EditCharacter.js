import React, { Component } from 'react'

import CharacterForm from '../CharacterForm/CharacterForm'
import styles from './EditCharacter.scss'

class EditCharacter extends Component{
  state = {
    character: {}
  }

  componentDidMount(){
    const id = this.props.match.match.params.character_id
    this.props.fetchCharacter(id)
      .then( response => response.data)
      .then( data => this.setState({ character: { id: id, ...data } }  ))
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

export default EditCharacter