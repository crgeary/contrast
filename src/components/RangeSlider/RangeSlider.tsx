import React, { ChangeEventHandler, FC } from "react";
import styled from "styled-components";

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
        <StyledRangeSlider>
            <RangeSliderControl>
                <RangeSliderCurrent
                    style={{
                        left: `calc(${currentPercentage}% - ${
                            (16 / 100) * currentPercentage
                        }px - 12px)`,
                    }}
                >
                    {current}
                </RangeSliderCurrent>

                <RangeSliderIndicator $value={3} onClick={() => doSetRangeSlider(3)}>
                    3:1
                </RangeSliderIndicator>

                <RangeSliderIndicator $value={4.5} onClick={() => doSetRangeSlider(4.5)}>
                    4.5:1
                </RangeSliderIndicator>

                <RangeSliderIndicator $value={7} onClick={() => doSetRangeSlider(7)}>
                    7:1
                </RangeSliderIndicator>

                <input
                    type="range"
                    min="0"
                    max="21"
                    step={0.01}
                    value={current}
                    onChange={doRangeSliderChange}
                />
            </RangeSliderControl>
        </StyledRangeSlider>
    );
};

const StyledRangeSlider = styled.div`
    margin-top: 25px;
    height: 50px;
    padding-top: 24px;

    @media print {
        display: none;
    }
`;

const RangeSliderControl = styled.div`
    position: relative;
    height: 28px;

    input[type="range"] {
        appearance: none;
        width: 100%;
        background: transparent;
        position: relative;
        z-index: 10;

        &::-webkit-slider-thumb {
            appearance: none;
        }

        &:focus {
            outline: none;
        }

        &::-webkit-slider-thumb {
            border: none;
            height: 26px;
            width: 16px;
            border-radius: 2px;
            background: ${({ theme }) => theme.colors.primary};
            cursor: grab;
            margin-top: -8px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        &::-moz-range-thumb {
            border: none;
            height: 26px;
            width: 16px;
            border-radius: 2px;
            background: ${({ theme }) => theme.colors.primary};
            cursor: grab;
            margin-top: -8px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        &::-ms-thumb {
            border: none;
            height: 26px;
            width: 16px;
            border-radius: 2px;
            background: ${({ theme }) => theme.colors.primary};
            cursor: grab;
            margin-top: -8px;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        &::-webkit-slider-runnable-track {
            width: 100%;
            height: 10px;
            border: none;
            border-radius: 2px;
            background-color: ${({ theme }) => theme.range.track.background};
        }

        &::-moz-range-track {
            width: 100%;
            height: 10px;
            border: none;
            border-radius: 2px;
            background-color: ${({ theme }) => theme.range.track.background};
        }
    }
`;

const RangeSliderCurrent = styled.span`
    position: absolute;
    font-size: 11px;
    font-weight: bold;
    line-height: 1;
    border-radius: 2px;
    bottom: calc(100% + 5px);
    text-align: center;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 10;
    color: #ffffff;
    width: 40px;
    padding: 4px 6px;
`;

const RangeSliderIndicator = styled.button<{ $value: number }>`
    position: absolute;
    font-size: 11px;
    font-weight: bold;
    line-height: 1;
    border-radius: 2px;
    bottom: calc(100% + 5px);
    text-align: center;
    border: none;
    background-color: ${({ theme }) => theme.range.track.background};
    z-index: 5;
    cursor: pointer;
    padding: 4px 6px;
    color: ${({ theme }) => theme.range.track.text};

    &::after {
        content: "";
        display: block;
        height: 15px;
        width: 2px;
        position: absolute;
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        background-color: inherit;
    }

    &:hover,
    &:focus {
        outline: none;
        background-color: #a0aec0;
    }
    left: ${({ $value }) => {
        if ($value === 3 || $value === 7) {
            return `calc(((${$value} / 21) * 100%) - 10px)`;
        }
        if ($value === 4.5) {
            return `calc(((${$value} / 21) * 100%) - 14px);`;
        }
        return null;
    }};
`;

/*

.app--dark {
    .range-slider {
        &__control {
            input[type='range'] {
                &::-webkit-slider-thumb {
                    background-color: #38b2ac;
                }
                &::-moz-range-thumb {
                    background-color: #38b2ac;
                }
                &::-ms-thumb {
                    background-color: #38b2ac;
                }

                &::-webkit-slider-runnable-track {
                    background-color: #4a5568;
                }
                &::-moz-range-track {
                    background-color: #4a5568;
                }
            }
        }
        &__indicator {
            background-color: #4a5568;
            color: #ffffff;
        }
    }
}

*/
