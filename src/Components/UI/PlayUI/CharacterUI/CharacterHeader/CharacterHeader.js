import React, { Component } from 'react'
import styles from './CharacterHeader.css'

class CharacterHeader extends Component {
  state = {
    character: {
      name: 'Jim Kirk',
      player: 'Steve',
      rank: 'Capitan',
      ship: 'USS Enterprise',
      stress: 9,
      determination: 1
    }
  }
  render() {
    return (
      <header className={styles.CharacterHeader}> 
        <div>
          <div className={styles.CharacterName}>
            {this.state.character.name}
            <span className={styles.PlayerName}>{this.state.character.player}</span>
          </div>
          <div className={styles.CharacterStressDetermination}>
            <div className={styles.CharacterStress}>Stress: <span>{this.state.character.stress}</span></div>
            <div className={styles.CharacterDetermination}>Determination: <span>{this.state.character.determination}</span></div>
          </div>
        </div>

        <div className={styles.CharacterFooter}>
          <div className={styles.ShipName}>{this.state.character.ship}</div>
          <div className={styles.CharacterRank}>{this.state.character.rank}</div>
        </div>
      </header>
    )
  }
}

export default CharacterHeader