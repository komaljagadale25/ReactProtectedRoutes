import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { LandingPage } from "./landing.page";
import "./styles.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { AppLayout } from './app.layout';
import { ProtectedRoute } from './protected.route';

function App() {
    return (
        <div className="App">
            <h1>Protected React Router Welcome</h1>
            <Switch>
                <Route exact path="/" component={LandingPage}></Route>
                <ProtectedRoute exact path="/app" component={AppLayout}></ProtectedRoute >
                <ProtectedRoute path="*" component={() => "404 NOT FOUND"}></ProtectedRoute>
                <Route path="*" component={() => "404 NOT FOUND"}></Route>
            </Switch>
        </div>
    )
}


const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
);