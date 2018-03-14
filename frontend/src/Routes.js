import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Departments from './containers/departments';
import About from './containers/about';
import Empolyees from './containers/employees';
import EmpolyeeDetail from './containers/empolyeeDetail';



const Routes = () => (
    <Switch>
        {/*<Route exact path="/" component={Departments}/>*/}
        {/*<Route path="/about" component={About}/>*/}
        {/*<Route path="/dept/:name" component={Empolyees}/>*/}
        {/*<Route path="/employee/:id" component={EmpolyeeDetail}/>*/}
    </Switch>
);

export const HOST_NAME = "http://127.0.0.1:5000"; //http://127.0.0.1:4000
export default Routes;