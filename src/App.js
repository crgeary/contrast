import React, { Component } from "react";
import { ChromePicker } from "react-color";
import tinycolor from "tinycolor2";
import { hex, score } from "wcag-contrast";

import Colors from "./components/Colors";
import Swatches from "./components/Swatches/Swatches";

class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            currentColor: ``,
            colors: ['#000000', '#ffffff'],
            filter: `all`
        };
        this.doRemoveColor = this.doRemoveColor.bind(this);
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
    checkContrastScore(contrast, isLarge = false) {
        if (isLarge) {
            return contrast >= 4.5 ? "AAA" : contrast >= 3 ? "AA" : "";
        }
        return contrast >= 7 ? "AAA" : contrast >= 4.5 ? "AA" : "";
    }
    colors() {
        let results = [];
        const colors = this.state.colors.map(c => tinycolor(c));

        colors.forEach(c1 => {
            colors.forEach(c2 => {
                if (c1.toHex() !== c2.toHex()) {
                    const theScore = this.checkContrastScore(hex(c1.toHexString(), c2.toHexString()));
                    const theScoreLarge = this.checkContrastScore(hex(c1.toHexString(), c2.toHexString()), true);
                    if (this.state.filter === `all`) {
                        results.push({
                            backgroundColor: c1.toHexString(),
                            textColor: c2.toHexString(),
                            contrast: hex(c1.toHexString(), c2.toHexString()),
                            score: theScore,
                            scoreLarge: theScoreLarge
                        });
                    } else if (this.state.filter === `aa` && (theScore.toLowerCase() === `aa` || theScore.toLowerCase() == `aaa`)) {
                        results.push({
                            backgroundColor: c1.toHexString(),
                            textColor: c2.toHexString(),
                            contrast: hex(c1.toHexString(), c2.toHexString()),
                            score: theScore,
                            scoreLarge: theScoreLarge
                        });
                    } else if (this.state.filter === `aaa` && theScore.toLowerCase() === `aaa`) {
                        results.push({
                            backgroundColor: c1.toHexString(),
                            textColor: c2.toHexString(),
                            contrast: hex(c1.toHexString(), c2.toHexString()),
                            score: theScore,
                            scoreLarge: theScoreLarge
                        });
                    }
                }
            })
        });

        return results;
    };
    doColorFilterChange(filter) {
        this.setState({ filter });
    };
    doRemoveColor(color) {
        this.setState({
            colors: this.state.colors.filter(c => c !== color)
        });
    };
    render() {
        return (
            <div className="wrapper">
                <div className="sidebar">
                    <div className="sidebar__section sidebar__section--sm">
                        <ChromePicker
                            color={this.state.currentColor}
                            onChange={this.doColorPickerChange}
                            disableAlpha={true}
                        />
                    </div>
                    <div className="sidebar__section">
                        <button class="button button--primary" onClick={this.doNewColorButtonClick}>
                            Add Color
                        </button>
                    </div>
                    <div className="sidebar__section">
                        <Colors colors={this.state.colors} doRemoveColor={this.doRemoveColor} />
                    </div>
                </div>
                <div className="main">
                    <div className="topbar">
                        <button onClick={this.doColorFilterChange.bind(this, `all`)}>All</button>
                        <button onClick={this.doColorFilterChange.bind(this, `aa`)}>AA</button>
                        <button onClick={this.doColorFilterChange.bind(this, `aaa`)}>AAA</button>
                    </div>
                    {this.state.colors.length >= 2
                        ? (
                            <Swatches colors={this.colors()} />
                        ) : (
                            <p>Please add 2 or more colours.</p>
                        )}
                </div>
            </div>
        );
    }
}

export default App;
