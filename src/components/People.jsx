import React, { Component } from 'react';






class People extends Component {
    constructor(props) {
        super(props)


        this.state = {
            people: [],
        }
    }





    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                let newState = {
                    people: [...data]
                };
                this.setState(newState);
                // console.log(this.state.people)
                // console.log(this.props.match)
            })
    }







    render() {
        return (


            <React.Fragment>
                <img className="img-fluid" src="https://github.com/covalence-io/reacting-to-apis/blob/master/logo.png?raw=true" alt="asdf" />
                <br>
                </br>

                {this.state.people.map((people, index) => {
                    return (
                        <div key={index} className="cards" >
                        <div className="card-body">
                            <h5 className="card-title">{people.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{people.gender}</h6>
                            <p className="card-text">{people.age}</p>
                            <a target="_blank" href={people.url} className="card-link">See My Card</a>

                        </div>
                        </div>



                    )
                })}
                
            </React.Fragment>

            










        )
    }
}

export default People