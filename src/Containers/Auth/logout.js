import React from 'react'
import { UserConsumer } from '../../Contexts/UserContext'

const logout = (props) => (
  <UserConsumer>
    {({logOut}) => {
      logOut()
      props.history.push('/')
    }}
  </UserConsumer>
)

export default logout