import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import './styles.css';




class App extends Component {
    constructor(props) {
        super(props)


        this.state = {
            films: [],

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
    }





    render() {
        return (
            <React.Fragment>
              
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