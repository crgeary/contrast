import React from "react";

import Swatch from "./Swatch";

export default class Swatches extends React.Component {
    render() {
        return (
            <div className="swatches">
                {this.props.colors.map((v, k) => (
                    <div class="swatches__swatch">
                        <Swatch key={k} {...v} />
                    </div>
                ))}
            </div>
        );
    }
}
