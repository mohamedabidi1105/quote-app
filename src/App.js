import React, {Component} from 'react';
import QuoteCard from './components/QuoteCard'
import logo from './logo.svg';
import './App.css';

const samplePerson = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection : "Left"
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      person: samplePerson
    }

    getPerson() {
      axios
      .get('')
      .then()
      .then()
    }
  }
  render() {
  return (
    <div className="App">

      <QuoteCard person={samplePerson} />

    </div>

  );
}
}


export default App;
