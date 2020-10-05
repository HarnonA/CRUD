import React from 'react';

import { BrowserRouter, Route, Redirect, Switch, Router } from 'react-router-dom'

import List from './screens/List';
import Home from './screens/Home';
import Auth from './screens/Auth';
import Unknow from './screens/Unknow';


function Routes() {
    return (
        // <Router>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/list' component={List} />
                <Route path='/auth' component={Auth} />
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
        // </Router>
    );
}

export default Routes;