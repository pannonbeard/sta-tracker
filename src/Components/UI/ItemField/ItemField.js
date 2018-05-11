import React from 'react'
import styles from './ItemField.scss'

const itemFields = (props) => {
  let classes = [styles.ItemField]
  if(props.extraClass){
    classes.push(props.extraClass)
  }

  return (
    <div className={classes.join(' ')}>
      <span>{props.label}</span>
      <span>{props.value}</span>
    </div>
  )
}

export default itemFields