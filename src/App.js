import React, { Component } from "react";
import { ChromePicker } from "react-color";
import tinycolor from "tinycolor2";
import { hex, score } from "wcag-contrast";
import { createGlobalStyle } from "styled-components";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Wrapper from "./components/Wrapper";
import Toolbar from "./components/Toolbar";
import Swatches from "./components/Swatches/Swatches";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 14px;
        line-height: 1.65;
    }
`

class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            currentColor: ``,
            colors: ['#000000', '#ffffff'],
            filter: `all`
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
                    const theScore = score(hex(c1.toHexString(), c2.toHexString()));
                    if (this.state.filter === `all` || this.state.filter === theScore.toLowerCase()) {
                        results.push({
                            backgroundColor: c1.toHexString(),
                            textColor: c2.toHexString(),
                            contrast: hex(c1.toHexString(), c2.toHexString()),
                            score: theScore
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
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <Wrapper>
                    <Sidebar>
                        <button onClick={this.doNewColorButtonClick}>Add</button>
                        <ChromePicker
                            color={this.state.currentColor}
                            onChange={this.doColorPickerChange}
                            disableAlpha={true}
                        />
                        <ul>
                            {this.state.colors.map((v, k) => (
                                <li key={k} style={{ backgroundColor: v }}>{v}</li>
                            ))}
                        </ul>
                    </Sidebar>
                    <Main>
                        <Toolbar>
                            <button onClick={this.doColorFilterChange.bind(this, `all`)}>All</button>
                            <button onClick={this.doColorFilterChange.bind(this, `aa`)}>AA</button>
                            <button onClick={this.doColorFilterChange.bind(this, `aaa`)}>AAA</button>
                        </Toolbar>
                        <Swatches colors={this.colors()} />
                    </Main>
                </Wrapper>
            </React.Fragment>
        );
    }
}

export default App;
