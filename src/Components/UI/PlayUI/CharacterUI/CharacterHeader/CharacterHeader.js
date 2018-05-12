import React from 'react'
import styles from './CharacterHeader.css'

const characterHeader = (props) => {
  const shipNameSize = props.shipName.length > 10 
  ? { fontSize:  '.85em', paddingTop: '.65em' }
  : null 
  return (
    <header className={styles.CharacterHeader}> 
      <div>
        <div className={styles.CharacterName}>
          {props.character.name}
          <span className={styles.PlayerName}>{props.character.player}</span>
        </div>
        <div className={styles.CharacterStressDetermination}>
          <div className={styles.CharacterStress}>Stress: <span>{props.character.stress}</span></div>
          <div className={styles.CharacterDetermination}>Determination: <span>{props.character.determination}</span></div>
        </div>
      </div>
      <div className={styles.CharacterFooter}>
        <div className={styles.ShipName} style={shipNameSize}>{props.shipName}</div>
        <div className={styles.CharacterRank}>{props.character.rank}</div>
      </div>
    </header>
  )
}

export default characterHeader