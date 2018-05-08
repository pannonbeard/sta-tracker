import React from 'react'

import styles from './CharacterAbilityNav.css'

const characterAbilityNav = (props) => (
  <nav className={styles.CharacterAbilityNav}>
    <ul>
      <li onClick={() => props.updateUI('info')}>Info</li>
      <li onClick={() => props.updateUI('talents')}>Talents</li>
      <li onClick={() => props.updateUI('battle')}>Battle</li>
      <li onClick={() => props.updateUI('equipment')}>Equipment</li>
      <li onClick={() => props.updateUI('ship')}>Ship</li>
    </ul>
  </nav>
)

export default characterAbilityNav