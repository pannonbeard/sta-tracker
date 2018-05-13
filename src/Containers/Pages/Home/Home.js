import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Home.scss'

const home = () => (
  <div className={styles.Home}>
    <header>
      <h1>Welcome!</h1>
    </header>
    <main>
      <h2><span>Characters</span></h2>
      <Link to='/characters/new' className={styles.createButton}>Create a New Character</Link>
      <h2><span>Campaigns</span></h2>
      <a href='/' className={styles.createButton}>Create a New Campaign</a>
    </main>
  </div>
)

export default home