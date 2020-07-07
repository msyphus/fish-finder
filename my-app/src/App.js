import React from 'react';
import FishCard from "./components/FishCard";
import Wrapper from "./components/Wrapper";
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
        {this.state.fish.map(fish => {
          return <FishCard 
          species={fish.species}
        image={fish.image} />})}
      </Wrapper>
    );
  };
}

export default App;
