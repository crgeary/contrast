import React, { Component } from 'react';
import tinycolor from 'tinycolor2';
import { hex } from 'wcag-contrast';

import Swatches from './components/Swatches/Swatches';
import Picker from './components/Picker/Picker';
import Header from './components/Header/Header';
import HeaderDescription from './components/Header/HeaderDescription';
import Footer from './components/Footer/Footer';
import Logo from './components/Logo/Logo';
import Popup from './components/Popup/Popup';
import Colors from './components/Colors/Colors';
import SwatchDetail from './components/SwatchDetail/SwatchDetail';

import './app.scss';

export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            colors: [],
            isDark: false,
            currentColor: null,
        };
        this.doClosePopup = this.doClosePopup.bind(this);
        this.doNewColor = this.doNewColor.bind(this);
        this.doDarkModeToggle = this.doDarkModeToggle.bind(this);
        this.doColorSwatchClick = this.doColorSwatchClick.bind(this);
        this.doRemoveColor = this.doRemoveColor.bind(this);
    }
    componentDidMount() {
        if (!window.location.hash) {
            return;
        }
        const colors = window.location.hash.substr(1).split(',').map(h => `#${h}`);
        this.setState({
            colors
        });
    }
    updateHash() {
        window.history.replaceState(undefined, undefined, `#${this.state.colors.map(h => h.replace('#', '')).join(',')}`);
    };
    doNewColor(color) {
        const colors = this.state.colors;
        if (!colors.includes(color) && color !== '') {
            colors.push(color);
            this.setState({
                colors
            });
        }
        this.updateHash();
    }
    doRemoveColor(color) {
        const colors = this.state.colors.filter(c => c !== color);
        this.setState({
            colors: this.state.colors.filter(c => c !== color)
        });
        this.updateHash(colors);
    }
    doDarkModeToggle() {
        this.setState({ isDark: !this.state.isDark });
    }
    doColorSwatchClick(color) {
        document.body.classList.add('body--popup');
        this.setState({
            currentColor: color
        });
    }
    doClosePopup() {
        document.body.classList.remove('body--popup');
        this.setState({
            currentColor: null
        });
    }
    colors() {
        const r = [];
        const colors = this.state.colors.map(c => tinycolor(c));

        colors.forEach(c1 => {
            colors.forEach(c2 => {
                if (c1.toHex() === c2.toHex()) return;
                r.push({
                    backgroundColor: c1,
                    textColor: c2,
                    contrast: hex(c1.toHexString(), c2.toHexString()),
                })
            });
        });

        return r;
    }
    render() {
        return (
            <div className={`app${this.state.isDark ? ` app--dark` : ``}`}>

                <Header doDarkModeToggle={this.doDarkModeToggle}>
                    <Logo />
                    <HeaderDescription>Accessible color combinations</HeaderDescription>
                </Header>

                {this.state.currentColor && <Popup closePopup={this.doClosePopup}><SwatchDetail color={this.state.currentColor} /></Popup>}

                <div className="main">
                    <div className="container">
                        <Picker doNewColor={this.doNewColor} />
                        <Colors colors={this.state.colors} doRemoveColor={this.doRemoveColor} />
                    </div>
                    <div className="container container--wide">

                        <Swatches colors={this.colors()} doColorSwatchClick={this.doColorSwatchClick} />

                    </div>
                </div>

                <Footer>
                    <p>Built by <a href="https://crgeary.com" rel="noopener noreferrer" target="_blank">Christopher Geary</a></p>
                </Footer>

            </div>
        );
    }
}
