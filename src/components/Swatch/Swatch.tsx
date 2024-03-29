import React, { ComponentPropsWithoutRef, FC } from "react";
import styled from "styled-components";
import { SwatchColor } from "../../types/SwatchColor";
import { getConformanceLevel } from "../../utils/contrast";
import { Check } from "./icons/Check";
import { Cross } from "./icons/Cross";
import { Info } from "./icons/Info";

type SwatchProps = Omit<ComponentPropsWithoutRef<"button">, "color"> & {
    color: SwatchColor;
    doColorSwatchClick: (color: SwatchColor) => void;
};

export const Swatch: FC<SwatchProps> = ({ color, doColorSwatchClick, ...props }) => {
    const contrast = Math.floor(color.contrast * 100) / 100;
    const { regular: score, large: scoreLarge } = getConformanceLevel(contrast);
    const textColor = color.textColor.toHexString();
    const backgroundColor = color.backgroundColor.toHexString();
    return (
        <StyledSwatch
            data-backgroundColor={backgroundColor}
            data-textColor={textColor}
            onClick={() => doColorSwatchClick(color)}
            {...props}
        >
            <SwatchPreview
                style={{
                    backgroundColor,
                    color: textColor,
                }}
            >
                <SwatchText $size="regular" $isStrike={!score}>
                    Abc
                </SwatchText>
                <SwatchText $size="large" $isStrike={!scoreLarge}>
                    Abc
                </SwatchText>
                <SwatchScores>
                    <SwatchScore $variant={score ? `pass` : `fail`}>
                        {score ? <Check /> : <Cross />}
                        <span>Small</span>
                        <strong>{score || `Fail`}</strong>
                    </SwatchScore>
                    <SwatchScore $variant={scoreLarge ? `pass` : `fail`}>
                        {scoreLarge ? <Check /> : <Cross />}
                        <span>Large</span>
                        <strong>{scoreLarge || `Fail`}</strong>
                    </SwatchScore>
                </SwatchScores>
            </SwatchPreview>
            <SwatchBody>
                <SwatchContrast>
                    Contrast
                    <strong data-contrast={contrast}>{contrast}:1</strong>
                </SwatchContrast>
                <SwatchInfo />
            </SwatchBody>
        </StyledSwatch>
    );
};

const StyledSwatch = styled.button`
    background-color: ${({ theme }) => theme.swatch.background};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    line-height: 1.25;
    border-radius: 2px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    position: relative;
    display: block;
    padding: 0;
    width: 100%;
    text-align: left;
    border: none;

    &:hover,
    &:focus {
        transform: scale(1.25);
        z-index: 10;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }
`;

const SwatchInfo = styled(Info)`
    color: ${({ theme }) => theme.swatch.info.text};
    transition: transform 0.2s ease;
`;

const SwatchPreview = styled.span`
    padding: 15px;
    display: block;
    font-weight: 600;
    position: relative;
`;

const SwatchContrast = styled.span`
    text-transform: uppercase;
    font-size: 10px;
    line-height: 1.25;
    color: ${({ theme }) => theme.swatch.label.text};
    strong {
        font-size: 16px;
        display: block;
        color: ${({ theme }) => theme.swatch.value.text};
    }
`;

const SwatchBody = styled.div`
    padding: 13px 15px;
    display: flex;
    justify-content: space-between;
`;

const SwatchScores = styled.span`
    position: absolute;
    top: 7px;
    right: 7px;
    width: 62px;
    bottom: 5px;
    font-size: 8px;
    text-transform: uppercase;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #1a202c;
`;

const SwatchText = styled.span<{ $size: "regular" | "large"; $isStrike: boolean }>`
    display: block;
    font-size: ${({ $size }) => ($size === "large" ? "26px" : null)};
    text-decoration: ${({ $isStrike }) => ($isStrike ? "line-through" : null)};
`;

const SwatchScore = styled.span<{ $variant: "pass" | "fail" }>`
    position: relative;
    background-color: rgb(255, 255, 255, 0.875);
    padding: 5px 5px 5px 26px;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgb(0, 0, 0, 0.1);

    span {
        letter-spacing: 0.2px;
        opacity: 0.75;
    }
    strong {
        display: block;
        font-size: 12px;
        letter-spacing: 0.75px;
    }
    svg {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
    }

    ${({ $variant, theme }) => `
        svg {
            color: ${$variant === "pass" ? theme.colors.success : null};
            color: ${$variant === "fail" ? theme.colors.error : null};
        }
    `}
`;
