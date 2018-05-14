import React, { Component } from 'react'

import styles from './Auth.scss'

class Auth extends Component{
  render(){
    return(
      <div className={styles.Auth}>
        <div className={styles.LoginHolder}>
          <h1>Login to Continue</h1>
          <div className={styles.GoogleLogin} onClick={this.props.signIn}>Login with Google</div>
        </div>
      </div>
    )
  }
}

export default Auth