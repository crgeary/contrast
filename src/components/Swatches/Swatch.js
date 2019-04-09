import React from "react";

export default class Swatch extends React.Component {
    cssScoreModifier(score) {
        if (`aa` === score.toLowerCase() || `aaa` === score.toLowerCase()) {
            return score.toLowerCase();
        }
        return `fail`;
    }
    render() {
        const { backgroundColor, textColor, score, contrast, scoreLarge } = this.props;
        return (
            <div className="swatch" style={{ backgroundColor, color: textColor }}>
                <div className="swatch__body">

                    <div className={`swatch__result swatch__result--${this.cssScoreModifier(score)}`}>
                        <span className="swatch__text">Abc</span>
                        {score && <span className="swatch__score">{score.toUpperCase()}</span>}
                    </div>

                    <div className={`swatch__result swatch__result--lg swatch__result--${this.cssScoreModifier(scoreLarge)}`}>
                        <span className="swatch__text">Abc</span>
                        {scoreLarge && <span className="swatch__score">{scoreLarge.toUpperCase()}</span>}
                    </div>

                </div>
                <div className="swatch__ratio">
                    {Math.floor(contrast * 100) / 100}:1
                </div>
            </div>
        );
    }
}
