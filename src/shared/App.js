import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main, Home, About, Posts } from 'pages';
import Menu from '../components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Main}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/home" component={Home}/>
                <Route path="/posts" component={Posts}/>
            </div>
        );
    }
}

export default App;