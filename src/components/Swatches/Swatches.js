import React from "react";

import Swatch from "./Swatch";

export default class Swatches extends React.Component {
    render() {
        if (this.props.colors.length < 2) {
            return <p>Please add 2 or more colours.</p>;
        }
        return (
            <div className={`swatches ${this.props.currentHoverColor && `swatches--active`}`}>
                {this.props.colors.map((v, k) => (
                    <div class="swatches__swatch">
                        <Swatch key={k} isActive={this.props.currentHoverColor === v.backgroundColor} {...v} />
                    </div>
                ))}
            </div>
        );
    }
}
