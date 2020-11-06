import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Compose from './components/Compose';
import Contact from './components/Contact';
import About from './components/About';

import './styles.css'

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <Redirect to="/home" />
                            )
                        }}
                    />
                    <Route exact path="/home" component={Home} />
                    <Route path="/compose" component={Compose} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/about" component={About} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;