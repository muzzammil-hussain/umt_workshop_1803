import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from './Routes';

import Nav from './components/nav';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav/>
                    <div className="container">
                        <div className="row">
                            <main role="main" className="col-md-10 offset-md-1">
                                <Routes />
                            </main>

                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
