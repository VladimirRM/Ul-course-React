import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import { routes } from '../../Router' 
import { privateRoutes, publicRoutes } from '../../Router'

const AppRouter = () => {
    const isAuth = false
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
