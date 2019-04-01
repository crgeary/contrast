import React from "react";

const crossIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>;

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
                <div className="swatch__footer">
                    {Math.floor(contrast * 100) / 100}:1
                </div>
            </div>
        );
    }
}
