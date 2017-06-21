import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import Home from '../home'
import Location from '../change-location'
import NavigationBar from '../header';

export default () => (
    <div className="App">
        <NavigationBar/>

        <main className="App-main">
            <Route exact path="/" component={Home} />
            <Route exact path="/change-location" component={Location} />
            <Redirect from="*" to="/" />
        </main>
    </div>
);
