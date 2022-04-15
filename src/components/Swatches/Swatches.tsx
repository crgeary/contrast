import React, { FC } from "react";

import { Swatch } from "../Swatch/Swatch";
import { SwatchColor } from "../../types/SwatchColor";

import canvas from "../../images/canvas.svg";

import "./swatches.scss";

type SwatchesProps = {
  colors: SwatchColor[];
  colorsTotal: number;
  minContrast: number;
  doColorSwatchClick: (color: SwatchColor) => void;
};

export const Swatches: FC<SwatchesProps> = ({
  colors,
  colorsTotal,
  minContrast,
  doColorSwatchClick,
}) => {
  return (
    <div className="swatches">
      {colors.length >= 2 ? (
        <>
          <p className="swatches__info">
            Showing {colors.length} of {colorsTotal * (colorsTotal - 1)}{" "}
            combinations where contrast ratio is at least {minContrast}
          </p>
          <div className="swatches__swatches">
            {colors.map((color, k) => (
              <div className="swatches__swatch" key={k}>
                <Swatch color={color} doColorSwatchClick={doColorSwatchClick} />
              </div>
            ))}
          </div>
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
};
