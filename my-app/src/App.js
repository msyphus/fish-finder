import React from 'react';
import FishCard from "./components/FishCard";
import Wrapper from "./components/Wrapper";
import Scores from "./components/Scores";
import fish from "./fish.json";
import './App.css';

class App extends React.Component {
  state = {
    fish
  }

  render() {
    return (
      <Wrapper>
        <h1 className="title">Fish Finder</h1>
        <Scores></Scores>
        {this.state.fish.map((fish, index) => {
          return <FishCard 
          key={index}
          species={fish.species}
        image={fish.image} />})}
      </Wrapper>
    );
  };
}

export default App;
