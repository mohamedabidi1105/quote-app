import React, {Component} from 'react';
import axios from 'axios'

import QuoteCard from './components/QuoteCard'

import './App.css';

const samplePerson = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection : "Left"
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: samplePerson
    }
    this.getPerson = this.getPerson.bind(this)
  }
    getPerson() {
      axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({character: data[0]})
      })
    }
  
  render() {
  return (
    <div className="App">

      <QuoteCard character={this.state.character} />
      <button className="button" onClick={this.getPerson}>Another Quote</button>

    </div>

  );
}
}


export default App;
