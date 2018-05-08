import React from 'react'

import styles from './CharacterTalents.css'

const characterTalents = (props) => {
  const mappedTalents = props.talents.map( talent => {
    return (
      <section key={talent.name} className={styles.CharacterTalent}>
        <h1><span>{talent.name}</span></h1>
        <p>{talent.description}</p>
      </section>
    )
  })

  return mappedTalents
}

export default characterTalents