import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import tinycolor from 'tinycolor2';

import Button from '../Button/Button';

import './Picker.scss';

const colorIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>;

export default class Picker extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            currentColor: ``,
            showColorPicker: false
        };
        this.doInputChange = this.doInputChange.bind(this);
        this.doColorPickerToggle = this.doColorPickerToggle.bind(this);
        this.doColorPickerChange = this.doColorPickerChange.bind(this);
        this.doNewColorSubmit = this.doNewColorSubmit.bind(this);
    }
    doInputChange(e) {
        this.setState({
            currentColor: e.target.value
        });
    }
    doColorPickerToggle() {
        this.setState({
            showColorPicker: !this.state.showColorPicker
        });
    }
    doColorPickerChange(color) {
        this.setState({
            currentColor: color.hex
        });
    }
    doNewColorSubmit(e) {
        e.preventDefault();
        this.props.doNewColor(this.state.currentColor);
        this.setState({
            currentColor: ``,
            showColorPicker: false
        });
    }
    render() {
        const currentColor = this.state.currentColor;
        return (
            <form className="picker" onSubmit={this.doNewColorSubmit}>
                <div className="picker__input">
                    <input type="text" placeholder="Hex/RGB" onChange={this.doInputChange} value={currentColor} />
                    <button type="button" className="picker__swatch" onClick={this.doColorPickerToggle}>
                        {colorIcon}
                        <span className="sr">Color Picker</span>
                    </button>
                    <div className="picker__colorpicker" style={{ display: this.state.showColorPicker ? `block` : `none` }}>
                        <SketchPicker
                            color={currentColor}
                            onChange={this.doColorPickerChange}
                            disableAlpha={true}
                        />
                    </div>
                </div>
                <Button
                    style={{ backgroundColor: currentColor, color: tinycolor(currentColor).isDark() ? `#FFFFFF` : `#000000` }}
                    disabled={currentColor ? false : true}
                >Add Color</Button>
            </form>
        );
    }
}
