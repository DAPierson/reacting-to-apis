import React, { Component } from 'react';
import { Link, } from 'react-router-dom';


class Films extends Component {
    constructor(props) {
        super(props)

        this.state = {
            films: [],

        }

    }


    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                let newState = {
                    films: [...data]
                };
                this.setState(newState);
                // console.log(this.state.films)
            })


    }


    render() {
        return (


            <React.Fragment>

                <img className="img-fluid" src="https://github.com/covalence-io/reacting-to-apis/blob/master/logo.png?raw=true" alt="asdf" />
                {this.state.films.map((film, index) => {
                    return (
                        <div key={index} className="card">
                            <img className="card-img-top" src="https://github.com/covalence-io/reacting-to-apis/blob/master/logo.png?raw=true" alt="asdf" />
                            <div className="card-body">
                                <Link to={`/Films/${film.id}`}>
                                    <h5 className="card-title">{film.title}</h5>
                                </Link>
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
}

export default Films;
