import React from 'react';
import { Route } from 'react-router-dom';

import MyFirstContainer from './containers/MyFirstContainer';

export default function getRoutes(store) {
    return (
        <div>
            <Route exact path="/" component={MyFirstContainer}/>
        </div>
    )
}
