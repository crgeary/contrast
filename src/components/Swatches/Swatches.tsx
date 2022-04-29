import React, { FC } from 'react';

import { Swatch } from '../Swatch/Swatch';
import { SwatchColor } from '../../types/SwatchColor';

import canvas from './canvas.svg';
import styled from 'styled-components';
import Image from 'next/image';

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
        <StyledSwatches>
            {colors.length >= 2 ? (
                <>
                    <SwatchesInfo>
                        Showing {colors.length} of {colorsTotal * (colorsTotal - 1)} combinations
                        where contrast ratio is at least {minContrast}
                    </SwatchesInfo>
                    <SwatchesSwatches>
                        {colors.map((color, k) => (
                            <SwatchesSwatch key={k}>
                                <Swatch color={color} doColorSwatchClick={doColorSwatchClick} />
                            </SwatchesSwatch>
                        ))}
                    </SwatchesSwatches>
                </>
            ) : (
                <SwatchesNone>
                    {colors.length < 2 ? (
                        <SwatchesError>Please add at least 2 colors.</SwatchesError>
                    ) : null}
                    <img src={canvas} alt="Lady staring at a blank canvas" />
                </SwatchesNone>
            )}
        </StyledSwatches>
    );
};

const StyledSwatches = styled.div`
    margin-bottom: 90px;
`;

const SwatchesNone = styled.div`
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
`;

const SwatchesInfo = styled.p`
    text-align: center;
    font-size: 14px;
    color: #4a5568;
`;

const SwatchesSwatches = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;
`;

const SwatchesSwatch = styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0 5px;
    margin-bottom: 10px;

    @media screen and (min-width: 480px) {
        max-width: 50%;
    }

    @media screen and (min-width: 768px) {
        max-width: 25%;
    }

    @media screen and (min-width: 1040px) {
        max-width: 16.666666%;
    }

    @media screen and (min-width: 1450px) {
        max-width: 12.5%;
    }
`;

const SwatchesError = styled.div`
    color: #9b2c2c;
    text-align: center;
    margin-bottom: 25px;
    font-size: 18px;
`;
