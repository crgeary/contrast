import React, { Component } from "react";
import tinycolor from "tinycolor2";
import { hex } from "wcag-contrast";

import Colors from "./components/Colors";
import Swatches from "./components/Swatches/Swatches";

import Picker from "./components/Picker";

class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            colors: ['#000000', '#ffffff'],
            filter: `all`
        };
        this.doRemoveColor = this.doRemoveColor.bind(this);
        this.doNewColorButtonClick = this.doNewColorButtonClick.bind(this);
    }
    componentDidMount() {
        if (!window.location.hash) {
            return;
        }
        const colors = window.location.hash.substr(1).split(',').map(h => `#${h}`);
        this.setState({
            colors
        })
    }
    doNewColorButtonClick(color) {
        const colors = this.state.colors;
        if (!colors.includes(color) && color !== '') {
            colors.push(color);
            this.setState({
                colors
            });
        }
        this.updateHash(colors);
    }
    updateHash(colors) {
        window.history.replaceState(undefined, undefined, `#${colors.map(h => h.replace('#', '')).join(',')}`);
    };
    checkContrastScore(contrast, isLarge = false) {
        if (isLarge) {
            return contrast >= 4.5 ? "AAA" : contrast >= 3 ? "AA" : "";
        }
        return contrast >= 7 ? "AAA" : contrast >= 4.5 ? "AA" : "";
    };
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
                    } else if (this.state.filter === `aa` && (theScore.toLowerCase() === `aa` || theScore.toLowerCase() === `aaa`)) {
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
        const colors = this.state.colors.filter(c => c !== color);
        this.setState({
            colors: this.state.colors.filter(c => c !== color)
        });
        this.updateHash(colors);
    };
    render() {
        return (
            <div className="wrapper">
                <div className="sidebar">
                    <div className="sidebar__section">
                        <Picker doNewColorButtonClick={this.doNewColorButtonClick} />
                    </div>
                    <div className="sidebar__section">
                        <Colors colors={this.state.colors} doRemoveColor={this.doRemoveColor} />
                    </div>
                </div>
                <div className="main">
                    <div className="topbar">
                        <button className={`button button--${this.state.filter === `all` ? `primary` : `secondary`}`} onClick={this.doColorFilterChange.bind(this, `all`)}>All</button>
                        <button className={`button button--${this.state.filter === `aa` ? `primary` : `secondary`}`} onClick={this.doColorFilterChange.bind(this, `aa`)}>AA</button>
                        <button className={`button button--${this.state.filter === `aaa` ? `primary` : `secondary`}`} onClick={this.doColorFilterChange.bind(this, `aaa`)}>AAA</button>
                    </div>
                    <Swatches colors={this.colors()} />
                </div>
            </div>
        );
    }
}

export default App;
