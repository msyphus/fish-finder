import React from 'react';
import Title from "./components/Title";
import FishCard from "./components/FishCard";
import Wrapper from "./components/Wrapper";
import fish from "./fish.json";
import './App.css';

class App extends React.Component {
  state = {
    fish,
    currCount: 0,
    hiCount: 0,
    title: "Fish Finder"
  };

  increaseScore = () => {
    if(this.state.currCount < 15) {
      this.setState({ currCount: this.state.currCount + 1 })
    } else {
      this.endGame();
    }
  };

  resetScore = () => {
    if(this.state.currCount > this.state.hiCount) {
      this.setState({ hiCount: this.state.currCount })
    };
    this.setState({ currCount: 0 });
  };

  randomizeCards = () => {
    this.state.fish.sort(() => Math.random() - 0.5);
  }

  endGame = () => {
    this.setState({ currCount: this.state.currCount + 1 })
    this.setState({ title: "Fish Catcher!" });
    this.setState({ hiCount: 16 });
  }

  clicker = id => {
    if(this.state.currCount !== 16) {
    const selected = this.state.fish.filter(fsh => fsh.id === id);
    if(selected[0].clicked === false) {
      this.increaseScore();
      selected[0].clicked = true;
    } else {
      this.resetScore();
      this.state.fish.forEach((fish) => (
        fish.clicked = false
      ));
    }
  } else {
      this.resetScore();
      this.state.fish.forEach((fish) => (
        fish.clicked = false
      ));
      this.setState({ title: "Fish Finder" });
  }
    this.randomizeCards();
  };

  render() {
    return (
      <Wrapper>
        <Title title={this.state.title}/>
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
          handleOnClick={this.clicker}
          />})}
      </Wrapper>
    );
  };
};

export default App;
