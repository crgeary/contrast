import React from 'react';
import tinycolor from 'tinycolor2';

import SR from '../SR/SR';

import './Colors.scss';

export default function Colors ({ colors, doRemoveColor }) {
    const colorCount = colors.length;
    const superColors = colors.map(c => tinycolor(c));

    return (
        <div className="colors">

            <ul className="colors__swatches">
                {superColors.map((color, k) => (
                    <li
                        key={k}
                        className={`colors__swatch colors__swatch--${color.isDark() ? `dark` : `light`}`}
                        style={{ backgroundColor: color }}>
                            <button className="colors__remove" onClick={() => doRemoveColor(color.getOriginalInput())}>
                                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"></path></svg>
                                <SR>Remove {color.getOriginalInput()}</SR>
                            </button>
                            {color.toHexString()}
                        </li>
                ))}
            </ul>

            {colorCount < 2 ? <p>Please add at least 2 colors.</p> : null}

        </div>
    );
}
