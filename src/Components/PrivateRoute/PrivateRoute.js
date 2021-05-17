import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const PrivateRoute = ({ children, ...props }) => {
  return (
    <Route
      {...props}
      render={() =>
        localStorage.getItem('token') ? children : <Redirect to='/' />
      }
    />
  )
}

export default PrivateRoute
