import React from "react";
import styled from "styled-components";

const SwatchWrapper = styled.div`
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .15);
    height: 100px;
    width: 100px;
    background-color: ${p => p.backgroundColor || `#ffffff`};
    color: ${p => p.textColor || `#000000`};
    position: relative;
`

const SwatchScore = styled.span`
    background-color: #ffffff;
    color: #000000;
    font-size: 14px;
    line-height: 1;
    padding: 2px 5px;
    position: absolute;
    bottom: 10px;
    right: 10px;
`

const SwatchText = styled.span`
    color: ${p => p.color};
    font-size: ${p => p.size === `lg` ? `22px` : `14px`};
    display: block;
    line-height: 1.25;
`

class Swatch extends React.Component {
    render() {
        return (
            <SwatchWrapper {...this.props}>
                <SwatchText>Aa Bb</SwatchText>
                <SwatchText size="lg" color={this.props.textColor}>Aa Bb</SwatchText>
                {this.props.score && <SwatchScore>{this.props.score}</SwatchScore>}
            </SwatchWrapper>
        );
    }
}
// {Math.floor(this.props.contrast * 100) / 100}
export default Swatch;
