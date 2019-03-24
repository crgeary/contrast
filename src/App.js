import React, { Component } from "react";
import { ChromePicker } from "react-color";
import tinycolor from "tinycolor2";
import { hex, score } from "wcag-contrast";

import Swatches from "./components/Swatches/Swatches";

class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            currentColor: ``,
            colors: ['#000000', '#ffffff']
        };
        this.doNewColorButtonClick = this.doNewColorButtonClick.bind(this);
        this.doColorPickerChange = this.doColorPickerChange.bind(this);
    }
    doNewColorButtonClick(e) {
        e.preventDefault();
        const colors = this.state.colors;
        if (!colors.includes(this.state.currentColor) && this.state.currentColor !== '') {
            colors.push(this.state.currentColor);
            this.setState({
                colors,
                currentColor: ''
            })
        }

    }
    doColorPickerChange(color) {
        this.setState({ currentColor: color.hex });
    };
    colors() {
        let results = [];
        const colors = this.state.colors.map(c => tinycolor(c));

        colors.forEach(c1 => {
            colors.forEach(c2 => {
                if (c1.toHex() !== c2.toHex()) {
                    results.push({
                        backgroundColor: c1.toHexString(),
                        textColor: c2.toHexString(),
                        contrast: hex(c1.toHexString(), c2.toHexString()),
                        score: score(hex(c1.toHexString(), c2.toHexString()))
                    });
                }
            })
        });

        return results;
    };
    render() {
        return (
            <div>
                <button type="submit" onClick={this.doNewColorButtonClick}>Add</button>
                <ChromePicker
                    color={this.state.currentColor}
                    onChange={this.doColorPickerChange}
                    disableAlpha={true}
                />
                <div>
                    <Swatches colors={this.colors()} />
                </div>
            </div>
        );
    }
}

export default App;
