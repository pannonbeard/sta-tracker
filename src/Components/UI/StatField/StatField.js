import React from 'react'

import styles from './StatField.scss' 

const statField = (props) => {
  const shrinkText = props.label.length > 8 
      ? { fontSize: '.65em', paddingTop: '.75em' } 
      : props.label.length >= 6 
        ? { fontSize: '.85em', paddingTop: '.45em' } : null

  return (
    <div className={styles.StatField}>
      <span style={shrinkText}>{props.label}</span> 
      <span>{props.value}</span>
    </div>
  )
}

export default statField