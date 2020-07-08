import React from 'react';
import FishCard from "./components/FishCard";
import Wrapper from "./components/Wrapper";
import fish from "./fish.json";
import './App.css';

class App extends React.Component {
  state = {
    fish,
    currCount: 0,
    hiCount: 0
  };

  increaseScore = () => {
    this.setState({ currCount: this.state.currCount + 1 });
  };

  resetScore = () => {
    this.setState({ currCount: 0 });
  };

  clicker = event => {
    if(event.clicked === false) {
      this.increaseScore();
      //change the fish.clicked to true
    } else {
      this.resetScore();
    }
  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Fish Finder</h1>
        <div className="row">
          <div className="col-sm-6 mx-3 currScore">
            <h4 className="score">Current Score: {this.state.currCount}</h4>
          </div>
          <div className="col-sm-6 mx-3 hiScore">
            <h4 className="score">High Score: {this.state.hiCount}</h4>
          </div>
        </div>
        {this.state.fish.map((fish, index) => {
          return <FishCard 
          key={index}
          id={fish.id}
          species={fish.species}
          image={fish.image} 
          clicked={fish.clicked}
          onClick={this.clicker}
          />})}
      </Wrapper>
    );
  };
};

export default App;
