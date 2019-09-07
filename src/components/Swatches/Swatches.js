import React from 'react';
import PropTypes from 'prop-types';

import Swatch from '../Swatch/Swatch';

import './swatches.scss';
import canvas from '../../images/canvas.svg';

function Swatches ({ colors, doColorSwatchClick }) {
    return (
        <div className="swatches">
            {colors.length >= 2 ? (
                <>
                    {colors.map((color, k) => (
                        <div className="swatches__swatch" key={k}>
                            <Swatch color={color} doColorSwatchClick={doColorSwatchClick} />
                        </div>
                    ))}
                </>
            ) : (
                <div className="swatches__none">
                    {colors.length < 2 ? (
                        <div className="swatches__error">Please add at least 2 colors.</div>
                    ) : null}
                    <img src={canvas} alt="Lady staring at a blank canvas" />
                </div>
            )}
            
        </div>
    );
}

Swatches.propTypes = {
    colors: PropTypes.array.isRequired,
};

export default Swatches;
