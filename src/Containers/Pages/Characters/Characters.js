import React, { Component } from 'react'

import styles from './Characters.scss'

class Characters extends Component{

  componentWillMount(){
    this.props.fetchCharacters()
  }

  render(){
    console.log(this.props.characterList)
    return(
      <div className={styles.Characters}>
        <header>
          <h1>Characters</h1>
        </header>
        <main>
          { this.props.characterList.map( character => (
            <div key={character.id}>
              {character.name}
            </div>
          ))}
        </main>
      </div>
    )
  }
}

export default Characters