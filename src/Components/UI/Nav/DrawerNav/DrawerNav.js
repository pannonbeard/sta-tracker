import React, { Fragment } from 'react'
import Backdrop from '../../Backdrop/Backdrop'
import styles from './DrawerNav.css'

const drawerNav = (props) => {

  const classes = [ styles.DrawerNav, props.open ? styles.DrawerNavOpen : null ].join(' ')
  const backDrop = props.open ? <Backdrop close={props.clicked}/> : null
  return (
    <Fragment>
      {backDrop}
      <div className={classes} onClick={props.clicked}> 
        <h1>Star Trek Adventures</h1>
        { props.children }
      </div>
    </Fragment>
  )
}

export default drawerNav