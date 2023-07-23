import React,{useContext} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import { privateRoutes, publicRoutes } from '../../Router'
import { AuthContext } from '../../Router/context'

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)
    console.log(isAuth)
    // const isAuth = false
  return (
    isAuth 
    ?
    <Switch>
    {privateRoutes.map(route=>
      <Route component={route.component} 
       path={route.path}
        exact={route.exact}/>
    )}
</Switch> 
    :
    <Switch>
    {publicRoutes.map(route=>
      <Route component={route.component} 
       path={route.path}
        exact={route.exact}/>
    )}
  <Redirect  to='/login'/>
    </Switch>
 

  )
}

export default AppRouter
