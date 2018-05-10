import React from 'react'
import styles from './CharacterBattle.scss'

const characterBattle = (props) => {

  const mappedWeapons = props.weapons.map( weapon => (
    <div className={styles.weaponEntry}>
      <div>
        <span>Name/Type</span>
        <span>{weapon.name_type}</span>
      </div>
      <div>
        <span>A</span>
        <span>{weapon.action_dice}</span>
      </div>
      <div className={styles.spanTwoColumns}>
        <span>Qualities</span>
        <span>{weapon.qualities}</span>
      </div>
    </div>
  ))

  const mappedInjuries = props.injuries.map( injury => (
    <div className={styles.Injury}>
      <div>
        <span>Type</span>
        <span>{injury.type}</span>
      </div>
      <div>
        <span>Qualities</span>
        <span>{injury.qualities}</span>      
      </div>
    </div>
  ))

  return (
    <div className={styles.CharacterBattle}>
      <section>
        <h1><span>Weapons</span></h1>
        <div>
          { mappedWeapons }
        </div>
      </section>
      <section>
        <h1><span>Injuries</span></h1>
        <div>
          { mappedInjuries }
        </div>
      </section>
    </div>
  )
}

export default characterBattle