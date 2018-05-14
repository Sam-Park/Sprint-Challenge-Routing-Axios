import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
    };
  }

  componentDidMount() {
    this.fetchSmurfs();
  }

  fetchSmurfs = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then((response) => this.setState({ smurfs: response.data }))
      .catch(error => console.error(`${error}`))
    }

  render() {
    return (
    
      <div className="App">
        <Route exact path="/" component={Header} />
        <Route  path="/smurfs/:id" render={ props =>  {
         return <Smurf {...props} />
           }} />
        <Route path="/smurfs" render={props => 
        <div>
          <SmurfForm />
          <Smurfs {...props} smurfs={this.state.smurfs} />
          </div>
        } />
       
      </div>
    );
  }
}

export default App;
