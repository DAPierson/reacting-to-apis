import React, {Component} from 'react'




class Film extends Component{
    constructor(props){
        super(props)

        this.state={

        }
    
    }
        componentDidMount() {
            fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    
                    
                        
                    this.setState(data);
                    
                    console.log(this.state);
                   
                })
    
    
    
    
    
    
    
    }




    render(){
        return(
            <React.Fragment>
                <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">{this.state.title}</h1>
    <p className="lead"> Director : {this.state.director}</p>
  </div>
</div>

<div className="card text-center">
  <div className="card-header">
    Released: {this.state.release_date}
  </div>
  <div className="card-body">
    <h5 className="card-title">Synopsis</h5>
    <p className="card-text"> {this.state.description}</p>
  </div>
  <div>
      <p> Producer : {this.state.producer}</p>
      </div>
  <div className="card-footer text-muted">
    2 days ago
  </div>
</div>


</React.Fragment>
        )
    }
}

export default Film