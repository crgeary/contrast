import React, { ChangeEventHandler, FC } from "react";

import "./RangeSlider.scss";

type RangeSliderProps = {
  current: number;
  doRangeSliderChange: ChangeEventHandler<HTMLInputElement>;
  doSetRangeSlider: (contrast: number) => void;
};

export const RangeSlider: FC<RangeSliderProps> = ({
  current,
  doRangeSliderChange,
  doSetRangeSlider,
}) => {
  const currentPercentage = (current / 21) * 100;
  return (
    <div className="range-slider">
      <div className="range-slider__control">
        <span
          className="range-slider__current"
          style={{
            left: `calc(${currentPercentage}% - ${
              (16 / 100) * currentPercentage
            }px - 12px)`,
          }}
        >
          {current}
        </span>

        <button
          className="range-slider__indicator range-slider__indicator--3:1"
          onClick={() => doSetRangeSlider(3)}
        >
          3:1
        </button>

        <button
          className="range-slider__indicator range-slider__indicator--4.5:1"
          onClick={() => doSetRangeSlider(4.5)}
        >
          4.5:1
        </button>

        <button
          className="range-slider__indicator range-slider__indicator--7:1"
          onClick={() => doSetRangeSlider(7)}
        >
          7:1
        </button>

        <input
          type="range"
          min="0"
          max="21"
          step={0.01}
          value={current}
          onChange={doRangeSliderChange}
        />
      </div>
    </div>
  );
};
