import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Smurf from './Smurf';


class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchSmurfById(id)
  }

  fetchSmurfById = id => {
    axios
    .get(`http://localhost:3333/smurfs/${id}`, {params: { id: id}})
    .then(response => {
      this.setState(() => ({ smurfs: response.data }));
      
    })
    .catch(error => console.error(`${error}`))
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link to={`/${smurf.id}`} key={smurf.id}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
 };


export default Smurfs;
