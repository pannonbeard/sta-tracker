import React from 'react'

import styles from './CharacterAbilityNav.css'

const characterAbilityNav = (props) => {

  return (
    <nav className={styles.CharacterAbilityNav}>
      <ul>
        <li onClick={() => props.updateUI('info')} className={props.active === 'info' ? styles.active : null}>Info</li>
        <li onClick={() => props.updateUI('talents')} className={props.active === 'talents' ? styles.active : null}>Talents</li>
        <li onClick={() => props.updateUI('battle')} className={props.active === 'battle' ? styles.active : null}> Battle</li>
        <li onClick={() => props.updateUI('equipment')} className={props.active === 'equipment' ? styles.active : null}>Equipment</li>
        <li onClick={() => props.updateUI('ship')} className={props.active === 'ship' ? styles.active : null}>Ship</li>
      </ul>
    </nav>
  )
}

export default characterAbilityNav