import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import './styles.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Films from './Films';
import People from './People';
import Home from './Home';
import Film from './Film';



class App extends Component {
    constructor(props) {
        super(props)


        this.state = {


        }

    }

    render() {

        return (



            <Router>
                <React.Fragment>
                    <Link to="/"> Home </Link>
                    <Link to="/Films"> Films </Link>
                    <Link to="/People"> People </Link>
                    <br>
                    </br>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/Films" component={Films} />
                        <Route exact path="/People" component={People} />
                        <Route path="/films/:id" component={Film} />
                    </Switch>

                </React.Fragment>
            </Router>




        )









    }


}



export default App







