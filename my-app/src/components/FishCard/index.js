import React from "react";
import "./style.css";

function FishCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.species} src={props.image} />
            </div>
            <div className="content">  
            <strong>Species:</strong> {props.species}
            </div>
            <span className="remove">𝘅</span>
        </div>
    );
}

export default FishCard;