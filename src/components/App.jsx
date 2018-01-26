import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import './styles.css';




class App extends Component {
    constructor(props) {
        super(props)


        this.state = {
            films: [],
            fBtn: false,
            people: [],
            pBtn: false,

        }

    }


    toggleFilms() {
        if (this.state.fBtn === false) {
            let filmState = { fBtn: true };
            this.setState(filmState);
            let peopleState = { pBtn: false };
            this.setState(peopleState);


        }
        else {
            let newState = { fBtn: false };
            this.setState(newState);
        }

    }

    togglePeople() {
        if (this.state.pBtn === false) {
            let peopleState = { pBtn: true };
            this.setState(peopleState);
            let filmState = { fBtn: false };
            this.setState(filmState);


        }
        else {
            let newState = { pBtn: false };
            this.setState(newState);
        }



    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                let newState = {
                    films: [...data]
                };
                this.setState(newState);
                console.log(this.state.films)
            })
        fetch('https://ghibliapi.herokuapp.com/people/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                let newState = {
                    people: [...data]
                };
                this.setState(newState);
            })
    }

    handleClickFilms(event) {
        this.toggleFilms();
    }
    handleClickPeople(event) {
        this.togglePeople()
        console.log(this.state.people);
    }





    render() {
        if (this.state.fBtn === true) {
            return (
                <React.Fragment>



                    <img className="img-fluid" src="https://github.com/covalence-io/reacting-to-apis/blob/master/logo.png?raw=true" alt="asdf" />

                    <div>
                        <button type="button" className="btn btn-primary btn-lg"
                            onClick={(event) => { this.handleClickFilms(event) }}>Load Films!</button>
                        <button type="button" className="btn btn-primary btn-lg"
                            onClick={(event) => { this.handleClickPeople(event) }}>Load People!</button>
                    </div>


                    {this.state.films.map((film, index) => {
                        return (
                            <div key={index} className="card"  >
                                <img className="card-img-top" src="https://github.com/covalence-io/reacting-to-apis/blob/master/logo.png?raw=true" alt="asdf" />
                                <div className="card-body">
                                    <h5 className="card-title">{film.title} </h5>
                                    <p className="card-text">{film.description}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Director: {film.director}</li>
                                    <li className="list-group-item">Producer: {film.producer}</li>

                                </ul>

                            </div>
                        )
                    })}
                </React.Fragment>
            )
        }


        else if (this.state.pBtn === true) {
            return (
                <React.Fragment>
                    <img className="img-fluid" src="https://github.com/covalence-io/reacting-to-apis/blob/master/logo.png?raw=true" alt="asdf" />

                    <div>
                        <button type="button" className="btn btn-primary btn-lg"
                            onClick={(event) => { this.handleClickFilms(event) }}>Load Films!</button>
                        <button type="button" className="btn btn-primary btn-lg"
                            onClick={(event) => { this.handleClickPeople(event) }}>Load People!</button>
                    </div>

                    <h1> people go here</h1>
                </React.Fragment>
            )
        }
        else {

            return (
                <React.Fragment>

                    <img className="img-fluid" src="https://github.com/covalence-io/reacting-to-apis/blob/master/logo.png?raw=true" alt="asdf" />

                    <div>
                        <button type="button" className="btn btn-primary btn-lg"
                            onClick={(event) => { this.handleClickFilms(event) }}>Load Films!</button>
                        <button type="button" className="btn btn-primary btn-lg"
                            onClick={(event) => { this.handleClickPeople(event) }}>Load People!</button>
                    </div>
                </React.Fragment>
            )
        }

    }
}



export default App







/* <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div> */