import React, { Component, Fragment } from 'react'
import bars from '../bars.svg'
import DrawerNav from './DrawerNav/DrawerNav'

import styles from './Nav.css'

class Nav extends Component {
  state = {
    drawerOpen: false
  }

  openDrawer = () => {
    this.setState({drawerOpen: true})
  }

  closeDrawer = () => {
    this.setState({drawerOpen: false})
  }


  render() {
    return (
      <Fragment>
        <nav className={styles.Nav}>
          <img src={bars} className={styles.MenuBars} alt="Open Menu" onClick={this.openDrawer}/>
          <div className={styles.Portrate}></div>
          {/* navigation */}
        </nav>
        {/* sidebar */}
        <DrawerNav open={this.state.drawerOpen} clicked={this.closeDrawer}>
          <ul>
            <li>Characters</li>
            <li>Campains</li>
            <li>Account</li>
            <li>Sign Out</li>
          </ul>
        </DrawerNav>
      </Fragment>
    )
  }
}

export default Nav