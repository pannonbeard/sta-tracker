import React, { Fragment } from 'react'
import Nav from '../UI/Nav/Nav'

const layout = (props) => (
  <Fragment> 
    <Nav />
    {props.children}
  </Fragment>
)

export default layout