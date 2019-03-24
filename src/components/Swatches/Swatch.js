import React from "react";

import "./Swatch.css";

class Swatch extends React.Component {
    render() {
        const css = {
            backgroundColor: this.props.backgroundColor,
            color: this.props.textColor
        };
        return (
            <div className="swatch" style={css}>
                {Math.floor(this.props.contrast * 100) / 100}
                {this.props.score && `(${this.props.score})`}
            </div>
        );
    }
}

export default Swatch;
