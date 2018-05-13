import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from './Characters.scss'

class Characters extends Component{

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

export default Characters