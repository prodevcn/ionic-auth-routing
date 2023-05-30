import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuthState } from '../context/context'


const AppRoute = ({ component, path, isPrivate, ...rest }: any) => {
  const userDetails: any = useAuthState()

  return (
    <Route
      exact
      path={path}
      render={props =>
        isPrivate && !Boolean(userDetails.token)
          ? (<Redirect to={{ pathname: '/' }} />)
          : (<Component {...props} />)
      }
      {...rest}
    />
  )
}

export default AppRoute
