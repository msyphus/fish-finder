import React from "react";
import "./style.css";

function Banner(props) {
    return (
        <div className="row">
            <div className="col-sm-6 mx-3 currScore">
                <h4 className="score">Current Score:</h4>
            </div>
            <div className="col-sm-6 mx-3 hiScore">
                <h4 className="score">High Score:</h4>
            </div>
        </div>
    );
}

export default Banner;