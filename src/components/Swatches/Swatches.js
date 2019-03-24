import React from "react";
import Swatch from "./Swatch";

import "./Swatches.css";

class Swatches extends React.Component {

    render() {
        const colors = this.props.colors;
        return (
            <div>
                <div className="swatches">
                    {colors.map((v, k) => (
                        <Swatch key={k} {...v} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Swatches;
