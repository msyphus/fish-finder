import React from "react";
import "./style.css";

class Title extends React.Component {
    state = {
        title: "Fish Finder"
    };

render() {
    return (
        <div>
            <h1 className="title">{this.state.title}</h1>
        </div>
    );
}
}

export default Title;