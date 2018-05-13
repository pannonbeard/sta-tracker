import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { CharacterConsumer } from '../../../Contexts/CharacterContext'

import styles from './Characters.scss'



class CharactersPage extends Component{

  componentWillMount(){
    this.props.fetchCharacters()
  }

  render(){
    return(
      <div className={styles.Characters}>
        <header>
          <h1>Characters</h1>
        </header>
        <main>
          { this.props.characterList.map( character => (
            <div key={character.id}>
              <Link to={`/characters/${character.id}/play`}>{character.name}</Link>
            </div>
          ))}
        </main>
      </div>
    )
  }
}

const characters = (props) =>(
  <CharacterConsumer> 
    { ({characters, getCharacters}) => (
        <CharactersPage
          {...props} 
          characterList={characters} 
          fetchCharacters={getCharacters}/> 
      ) }
  </CharacterConsumer> 
)

export default characters