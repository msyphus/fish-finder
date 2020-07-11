import React from "react";
import "./style.css";

class Scores extends React.Component {
    state = {
        currCount: 0,
        hiCount: 0
    };

    increaseScore = () => {
        this.setState({ currCount: this.state.currCount + 1 });
    };

    resetScore = () => {
        this.setState({ currCount: 0 });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 mx-3 currScore">
                    <h4 className="score">Current Score: {this.state.currCount}</h4>
                </div>
                <div className="col-sm-6 mx-3 hiScore">
                    <h4 className="score">High Score: {this.state.hiCount}</h4>
                </div>
            </div>
        );
    }
}



export default Scores;