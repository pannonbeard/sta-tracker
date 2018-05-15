import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { CharacterConsumer } from '../../../Contexts/CharacterContext'
import { UserConsumer } from '../../../Contexts/UserContext'
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
        <Link to='/characters/new' className={styles.createButton}>Create a New Character</Link>
          { this.props.characterList.map( character => (
            <div key={character.id} className={styles.Character}>
              <div className={styles.Portrait}></div>
              <h2>{character.name}</h2>
              <div className={styles.PlayEdit}>
                <Link to={`/characters/${character.id}/play`}>Play</Link>
                <Link to={`/characters/${character.id}/edit`}>Edit</Link>
              </div>
            </div>
          ))}
        </main>
      </div>
    )
  }
}

const characters = (props) =>(
  <UserConsumer>
    {({user}) => (
      <CharacterConsumer> 
        {({characters, getCharacters}) => (
          <CharactersPage
            {...props} 
            characterList={characters} 
            fetchCharacters={() => getCharacters(user.uid)}/> 
        )}
      </CharacterConsumer> 
    )}
  </UserConsumer>  
)

export default characters