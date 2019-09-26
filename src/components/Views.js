import { Switch, Route } from 'react-router-dom'
import React from 'react';
import RandomPattern from './RandomPattern';
import Landing from './Landing';
function Views() {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/random" component={RandomPattern}/>
            </Switch>
        </main>
    )
}
export default Views;