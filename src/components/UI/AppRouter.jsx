import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import { routes } from '../../Router' 
import { privateRoutes, publicRoutes } from '../../Router'

const AppRouter = () => {
  return (

       <Switch>
      {privateRoutes.map(route=>
        <Route component={route.component} 
         path={route.path}
          exact={route.exact}/>
      )}
      {publicRoutes.map(route=>
        <Route component={route.component} 
         path={route.path}
          exact={route.exact}/>
      )}
    <Redirect  to='/posts'/>
  </Switch> 

  )
}

export default AppRouter
