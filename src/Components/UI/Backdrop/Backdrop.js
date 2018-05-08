import React from 'react'

import styles from './Backdrop.css'

const backdrop = (props) => (
  <div className={styles.Backdrop} onClick={props.close}> </div>
)

export default backdrop