import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import App from './App'
import { AppContainer } from 'react-hot-loader'

export default class Routes extends Component
{
    Index = () =>
    {
        return(
            <AppContainer>
            <App />
            </AppContainer>
        )
    }
    
    Stats = () =>
    {
        return(
            <AppContainer>
            <App />
            </AppContainer>
        )
    }
    
    constructor()
    {
        <Router>
            <div>
                <Route path="/" exact component={Index} />
                <Route path="/stats" exact component={Stats} />
            </div>
        </Router>
    }
}
