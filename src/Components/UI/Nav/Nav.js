import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import bars from '../../../assets/bars.svg'
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
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/characters'>Characters</Link></li>
            <li><Link to='/campaigns'>Campaigns</Link></li>
            <li><Link to='/account'>Account</Link></li>
            <li><Link to='/'>Sign Out</Link></li>
          </ul>
        </DrawerNav>
      </Fragment>
    )
  }
}

export default Nav