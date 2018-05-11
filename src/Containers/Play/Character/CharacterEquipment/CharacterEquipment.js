import React from 'react'

import styles from './CharacterEquipment.scss'

const characterEquipment = (props) => {
  const mappedEquipment = props.equipment.map( (equipt, index) => (
    <section key={index}>
      <h1><span>{equipt.name}</span></h1>
      <p className={styles.CharacterEquipmentDescription}>{equipt.description}</p>
    </section>
  ))

  return mappedEquipment
}

export default characterEquipment