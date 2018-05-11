import React from 'react'
import styles from './CharacterBattle.scss'

import ItemField from '../../../../Components/UI/ItemField/ItemField'

const characterBattle = (props) => {

  const mappedWeapons = props.weapons.map( (weapon, index) => (
    <div className={styles.weaponEntry} key={index}>
      <ItemField label='Name/Type' value={weapon.name_type} />
      <ItemField label='A' value={weapon.action_dice} />
      <ItemField label='Qualities' value={weapon.qualities} extraClass={styles.spanTwoColumns}/>
    </div>
  ))

  const mappedInjuries = props.injuries.map( (injury, index) => (
    <div className={styles.Injury} key={index}>
      <ItemField label='Type' value={injury.type} />    
      <ItemField label='Qualities' value={injury.qualities} />    
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