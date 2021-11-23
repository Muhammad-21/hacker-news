import React from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import { routes } from '../router'

export default function AppRouter() {
    return (
        <Switch>
           {routes.map(route => 
                <Route key={route.path} path={route.path} component={route.component} exact={route.exact}/>
            )}
            <Redirect to="/"/>
        </Switch>
    )
}
