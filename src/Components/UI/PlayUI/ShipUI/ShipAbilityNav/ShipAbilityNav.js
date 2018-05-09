import React from 'react'

import styles from './ShipAbilityNav.css'

const shipAbilityNav = (props) => (
  <nav className={styles.ShipAbilityNav}>
    <ul>
      <li onClick={() => props.updateUI('general')} className={props.active === 'general' ? styles.active : null}>General</li>
      <li onClick={() => props.updateUI('stats')} className={props.active === 'stats' ? styles.active : null}>Stats</li>
      <li onClick={() => props.updateUI('talents')} className={props.active === 'talents' ? styles.active : null}>Talents</li>
      <li onClick={() => props.updateUI('battle')} className={props.active === 'battle' ? styles.active : null}>Battle</li>
    </ul>
  </nav>
)

export default shipAbilityNav