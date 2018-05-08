import React from 'react'

import styles from './ShipAbilityNav.css'

const shipAbilityNav = (props) => (
  <nav className={styles.ShipAbilityNav}>
    <ul>
      <li onClick={() => props.updateUI('general')}>General</li>
      <li onClick={() => props.updateUI('stats')}>Stats</li>
      <li onClick={() => props.updateUI('talents')}>Talents</li>
      <li onClick={() => props.updateUI('battle')}>Battle</li>
    </ul>
  </nav>
)

export default shipAbilityNav