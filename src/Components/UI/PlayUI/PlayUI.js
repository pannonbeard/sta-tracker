import React, { Fragment } from 'react'

import CharacterHeader from './CharacterUI/CharacterHeader/CharacterHeader'
import CharacterAbilityNav from './CharacterUI/CharacterAbilityNav/CharacterAbilityNav'

import styles from './PlayUI.css'

const playUi = (props) => (
  <Fragment>
    <CharacterHeader />
    <CharacterAbilityNav updateUI={props.changeUI}/>
    <main className={styles.PlayUI}>
      {props.children}
    </main>
  </Fragment>
)

export default playUi