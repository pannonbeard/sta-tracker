import React, { Fragment } from 'react'

import CharacterHeader from './CharacterUI/CharacterHeader/CharacterHeader'
import CharacterAbilityNav from './CharacterUI/CharacterAbilityNav/CharacterAbilityNav'

import styles from './PlayUI.scss'

const playUi = (props) => (
  <Fragment>
    <CharacterHeader character={props.character}/>
    <CharacterAbilityNav updateUI={props.changeUI} active={props.active}/>
    <main className={styles.PlayUI}>
      {props.children}
    </main>
  </Fragment>
)

export default playUi