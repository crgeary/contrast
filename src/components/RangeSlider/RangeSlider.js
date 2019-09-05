import React from 'react';

import './RangeSlider.scss';

export default function RangeSlider ({ current, doRangeSliderChange, doSetRangeSlider }) {
    const currentPercentage = (current/21)*100;
    return (
        <div className="range-slider">
            <div class="range-slider__control">
                <span class="range-slider__current" style={{ left: `calc(${currentPercentage}% - ${(16/100)*currentPercentage}px - 12px)` }}>{current}</span>
                <button class="range-slider__indicator range-slider__indicator--3:1" onClick={() => doSetRangeSlider(3)}>3:1</button>
                <button class="range-slider__indicator range-slider__indicator--4.5:1" onClick={() => doSetRangeSlider(4.5)}>4.5:1</button>
                <button class="range-slider__indicator range-slider__indicator--7:1" onClick={() => doSetRangeSlider(7)}>7:1</button>
                <input type="range" min="0" max="21" step=".01" value={current} onChange={doRangeSliderChange} />
            </div>
        </div>
    );
}